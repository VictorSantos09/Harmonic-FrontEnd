export class MessageModel {
  severity: string;
  summary: string;
  detail: string;
  life?: number = 3000;

  constructor(obj: MessageModel) {
    this.severity = obj.severity;
    this.summary = obj.summary;
    this.detail = obj.detail;
    this.life = obj.life ?? 3000;
  }
}
