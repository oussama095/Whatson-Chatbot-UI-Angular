export interface SessionResponse {
  session_id: string;
}

export class MessageBody {

  input: {
    message_type: string;
    text: string;
    options: {
      return_context: boolean;
    }
  };

  constructor(text: string) {
    this.input = {
      message_type: 'text',
      text,
      options: {
        return_context: true,
      }
    };
  }
}

export interface MessageResponse {
  output: {
    intents: [
      {
        intent: string,
        confidence: number
      }
    ],
    entities: [],
    generic: [
      {
        response_type: string;
        text: string;
      }
    ]
  };

  user_id: string;

  context: {
    global: {
      system: {
        turn_count: number,
        user_id: string
      },
      session_id: string
    },
    skills: {
      'main skill': {
        system: {}
      }
    }
  };

}
