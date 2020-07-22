import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  nameHolder = '';
  phoneHolder = '';
  messageHolder = '';
  isShow = false;

  public form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    message: new FormControl('', Validators.maxLength(500))
  });

  constructor(
    private translate: TranslateService,
    private emailService: EmailService) {

  }

  ngOnInit(): void {
    this.translate.get("CONTACTS.NAME").subscribe((res) => {
      this.nameHolder = res;
    });

    this.translate.get("CONTACTS.PHONE").subscribe((res) => {
      this.phoneHolder = res;
    });

    this.translate.get("CONTACTS.MESSAGE").subscribe((res) => {
      this.messageHolder = res;
    });
  }

  sendEmail() {
    const data = `Имя: ${this.form.get('name').value}\n
                  Телефон: ${this.form.get('phone').value}\n
                  Сообщение: ${this.form.get('message').value}`;

    this.emailService.sendEmail(data).subscribe(res => {
      this.form.reset();
      this.isShow = true;
      setTimeout(this.close.bind(this), 5000);
    });
  }

  close() {
    this.isShow = false;
  }

}
