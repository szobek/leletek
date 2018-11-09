import {Component, TemplateRef} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {leletekObj} from './leletek';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    leletek: Array<{}>;
    year: number;

    modalRef: BsModalRef;

    constructor(private modalService: BsModalService) {
        this.year = 0;
        this.leletek = leletekObj;

    }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template,
            Object.assign({}, { class: 'modal-lg' }));
    }
}







