import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MessageBody, MessageResponse, SessionResponse} from '../../schema/responses';
import {Message} from '../../schema/message';


@Injectable({
  providedIn: 'root'
})
export class WatsonService {

  constructor(private http: HttpClient) {
  }


  getSessionId(): Promise<string> {
    return this.http.post<SessionResponse>('', null).toPromise().then(res => res.session_id);
  }

  sendQuestion(sessionId: string, message: string): Promise<Message> {
    const url = `${sessionId}/message`;
    const body = new MessageBody(message);
    return this.http.post<MessageResponse>(url, body).toPromise().then(res => {
      return {data: res.output.generic[0].text, date: new Date().toDateString(), sender: 1};
    });
  }

}
