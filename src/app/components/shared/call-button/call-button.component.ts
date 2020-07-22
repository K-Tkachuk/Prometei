import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons/faPhoneAlt';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-call-button',
  templateUrl: './call-button.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./call-button.component.scss']
})
export class CallButtonComponent implements OnInit {
  phone = faPhoneAlt;
  closeResult: any;
  phoneHolder = '';
  public form = new FormGroup({
    phone: new FormControl('', [Validators.minLength(10), Validators.required])
  });

  constructor(
    private modalService: NgbModal,
    private translate: TranslateService,
    private emailService: EmailService) { }

  open(content) {
    this.translate.get("OTHER.PHONE").subscribe((res) => {
      this.phoneHolder = res;
    });

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.emailService.sendEmail("Перезвони мне:  " + this.form.get('phone').value)
        .subscribe(() => {
          this.form.reset();
        });
    });
  }

  ngOnInit(): void {
  }
}
