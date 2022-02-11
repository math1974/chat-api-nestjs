import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";

@WebSocketGateway({ cors: true })
export class ChatGateway {
    @WebSocketServer()
    server;

    @SubscribeMessage('message:send')
    handleMessage(@MessageBody() message: string): void {
        this.server.emit('message:received', message);
    }
}