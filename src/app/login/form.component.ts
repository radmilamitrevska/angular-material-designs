import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from './user';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormComponent  {
    form: FormGroup;
    filteredStates: Observable<any[]>;
    date = new Date();
    number = 0.25;
    states: any[] = [
        {
            name: 'Arkansas',
            population: '2.978M',
            // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
            flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
        },
        {
            name: 'California',
            population: '39.14M',
            // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
            flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
        },
        {
            name: 'Florida',
            population: '20.27M',
            // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
            flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
        },
        {
            name: 'Texas',
            population: '27.47M',
            // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
            flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
        }
    ];

    constructor(private fb: FormBuilder) {
        this.createForm();
        this.filteredStates = this.form.get('stateCtrl').valueChanges
            .startWith(null)
            .map(state => state ? this.filterStates(state) : this.states.slice());
    }

    filterStates(name: string) {
        return this.states.filter(state =>
            state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
    }

    createForm() {
        this.form = this.fb.group({
            name: ['', {
                validators: [Validators.required], updateOn: 'submit'} ],
            password: '',
            city: '',
            stateCtrl: '',
            zip: '',
            power: '',
            sidekick: ''
        });
    }

}
