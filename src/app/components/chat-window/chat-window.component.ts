import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ChatGptService } from 'src/app/shared/services/chat-gpt/chat-gpt.service';
import { LocalStorageService } from 'src/app/shared/services/storage/local-storage.service';
import { VoiceRecognitionService } from 'src/app/shared/services/voice/voice-recognition.service';
import * as _ from 'lodash';
import * as moment from 'moment';
import { Message } from './interfaces/message.interface';
// @ts-ignore
import Speech from 'speak-tts';
@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss'],
})
export class ChatWindowComponent implements OnInit {
  public emojis = ['😀', '😃'];
  public emojiFlag = false;
  public chatbotForm!: FormGroup;
  public selectionStart = 0;
  public selectionEnd = 0;
  public messages!: Message[];
  public storageKeyName!: string;
  private chatGptSubs!: Subscription;
  public chatSpinner = false;
  speech: any;
  language!: string;
  @ViewChild('scrollMe') private myScrollContainer!: ElementRef;
  @Input() animalName = 'cat';
  constructor(private _formBuilder: FormBuilder,
    private _voiceRecognitionService: VoiceRecognitionService,
    private _activatedRoute: ActivatedRoute,
    private _localStorageService: LocalStorageService,
    private _chatGptService: ChatGptService) {
    this._voiceRecognitionService.init();
    this.speech = new Speech();
  }
  ngOnInit(): void {
    this.storageKeyName = moment().format('YYYY-MM-DD') + ':' + this.animalName;
    this.messages = JSON.parse(this._localStorageService.getItem(this.storageKeyName)) || [];
    //this.animalName = this._activatedRoute.snapshot.queryParamMap.get('animal') || 'cat';
    this.chatbotForm = this._formBuilder.group({
      message: ['', [Validators.required]]
    });
    this._voiceRecognitionService.getSppechTotext().subscribe((response) => {
      const existingMessage = this.chatbotForm.get('message')?.value;
      const message = existingMessage + ' ' + response;
      this.chatbotForm.patchValue({
        message
      });
    });
    if (this.messages.length === 0) {
      const message: Message = {
        role: '',
        content: '',
        initialLoad: true
      }
      this.askChatGpt(message);
    }
    this.scrollToBottom();
    if (this.speech.hasBrowserSupport()) { // returns a boolean
      console.log("speech synthesis supported");
      this.speech.init({
        'volume': 1,
        'lang': 'en-GB',
        'rate': 1,
        'pitch': 1,
        'voice': 'Google UK English Male',
        'splitSentences': true,
        'listeners': {
          'onvoiceschanged': (voices: any) => {
            //console.log("Event voiceschanged", voices)
          }
        }
      }).then((data: any) => {
        // The "data" object contains the list of available voices and the voice synthesis params
        console.log("Speech is ready, voices are available", data)
      }).catch((e: any) => {
        console.error("An error occured while initializing : ", e)
      })
    }

  }
  public emojiToggle() {
    this.emojiFlag = !this.emojiFlag;
  }
  public setSelection(event: any) {
    this.selectionStart = event.target?.selectionStart;
    this.selectionEnd = event.target?.selectionEnd;
  }
  public addEmoji(emoji: any) {
    const existingMessage = this.chatbotForm.get('message')?.value;
    let message;
    if (existingMessage) {
      let startingText = existingMessage.slice(0, this.selectionStart);
      let endingText = existingMessage.slice(this.selectionStart);
      message = startingText + emoji + endingText;
    } else {
      message = emoji;
    }
    this.chatbotForm.patchValue({
      message
    });
    this.emojiFlag = false;
  }
  public onInput() {
    this, this.emojiFlag = false;
  }
  public start() {
    this._voiceRecognitionService.start();
  }
  public stop() {
    this._voiceRecognitionService.stop();
  }
  public sendMessage() {
    if (this.chatbotForm.valid) {
      const message: Message = {
        role: 'user',
        content: this.chatbotForm.get('message')?.value.replace(/(?:\r\n|\r|\n)/g, '<br>')
      }
      this.messages.push(message);
      this._localStorageService.setItem(this.storageKeyName, JSON.stringify(this.messages));
      this.chatbotForm.reset();
      this.askChatGpt(message);
    }

  }
  private askChatGpt(message: Message) {
    this.chatSpinner = true;
    this.chatGptSubs = this._chatGptService.askChatGpt(this.animalName, message).subscribe((response) => {
      this.chatSpinner = false;
      const choices = _.get(response, 'choices', []);
      choices.forEach((item: any) => {
        this.messages.push(item.message);
      });
      this._localStorageService.setItem(this.storageKeyName, JSON.stringify(this.messages));
    }, (err) => {
      this.chatSpinner = false;
    });
  }
  ngAfterViewChecked() {
    this.scrollToBottom();
  }
  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }
  share(message: string) {
    const shareData = {
      title: "Scope School",
      text: message,
      url: window.location.href
    };
    try {
      navigator.share(shareData);
    } catch (err) {
      console.log(err);
    }
  }
  speak(text: string) {
    this.speech.speak({
      text
    }).then(() => {
      console.log("Success !")
    }).catch((e: any) => {
      console.error("An error occurred :", e);
    })
  }
  ngOnDestroy(): void {
    if (this.chatGptSubs) {
      this.chatGptSubs.unsubscribe();
    }
  }

}
