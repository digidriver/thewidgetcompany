import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `
        <div class="jumbotron">
            <img class="centeredImg" src="img/thewidgetcompany.png">
            <p class="text-center">{{blurb}}<span class="trademark">{{blurbTm}}</span>{{blurb2}}</p>
            <br/>
            <img class="centeredImg" src="img/system_log_out_T.png">
            <p class="text-center">{{product}}<span class="trademark">{{productTm}}</span>{{teaserDate}}</p>
        </div>
    `,
    styles: [`
        .jumbotron {
            background: #FFF;
        }
        .trademark {
            font-size: .83em; 
            vertical-align: super;
        }
        .centeredImg {
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
    `]
})

export class AppComponent {
    name: string;
    blurb: string;
    blurbTm: string;
    blurb2: string;
    product: string;
    productTm: string;
    teaserDate: string;

    constructor() {
        this.name = 'Angular 2';
        this.blurb = 'A brand new addition to the On The Go';
        this.blurbTm = 'TM';
        this.blurb2 = ' suite of available products is coming soon:';
        this.product = 'Profile Control';
        this.productTm = 'TM';
        this.teaserDate = " - Coming Fall 2017";
    }
}