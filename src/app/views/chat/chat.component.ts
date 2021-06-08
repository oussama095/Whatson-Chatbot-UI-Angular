import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Message} from '../../shared/schema/message';
import {WatsonService} from '../../shared/service/watson-service/watson.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  chatBotName!: string;

  formGroup!: FormGroup;
  messages: Message[] = [];
  sessionId: string;

  constructor(private fb: FormBuilder, private watsonService: WatsonService) {

  }

  ngOnInit(): void {
    this.watsonService.getSessionId().then(sessionId => this.sessionId = sessionId).then(() => {
      this.watsonService.sendQuestion(this.sessionId, '').then(res => {
        this.messages.unshift(res);
      });

    });
    this.chatBotName = 'chatBot';
    this.formGroup = this.fb.group({
      message: this.fb.control('')
    });
  }

  sendMessage(): void {
    const message = this.formGroup.value.message;
    if (message) {
      this.messages.unshift({data: message, date: new Date().toDateString(), sender: 0});
      this.formGroup.reset();
      this.watsonService.sendQuestion(this.sessionId, message).then(res => {
        this.messages.unshift(res);
      });
    }
  }
}
