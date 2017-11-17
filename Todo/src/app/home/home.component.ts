import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: [
        trigger('goals', [
            transition('* => *', [
                query(':enter', style({ opacity:0 }), { optional: true }),

                query(':enter', stagger('500ms', [
                    animate('.5s ease-in', keyframes([
                        style({ opacity: 0, width:'30%', offset:0}),
                        style({ opacity: .5, width:'50%', offset:.3}),
                        style({ opacity: 1, width:'100%', offset:1}),
                    ]))]), { optional: true }),

                query(':leave', stagger('500ms', [
                    animate('.5s ease-in', keyframes([
                        style({ opacity: 1, width:'100%', offset:0}),
                        style({ opacity: .5, width:'50%', offset:.3}),
                        style({ opacity: 0, width:'30%', offset:1}),
                    ]))]), { optional: true })
            ])
        ])
    ]
})
export class HomeComponent implements OnInit {

    itemCount: number;
    goalText: string = '';
    goals =['Изучить Angular'];

    constructor() {
    }

    ngOnInit() {
        this.itemCount = this.goals.length;
    }

    addItem(){
        if (this.goalText !=''){
            this.goals.push(this.goalText);
            this.goalText = '';
            this.itemCount = this.goals.length;
        }
    }

    removeItem(i){
        this.goals.splice(i, 1);
        this.itemCount = this.goals.length;
    }

}
