import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar-home',
  templateUrl: './sidebar-home.component.html',
  styleUrls: ['./sidebar-home.component.css']
})
export class SidebarHomeComponent implements OnInit {

  curWith = '200px';
  curWithCalculator = 200;

  constructor() {
  }

  ngOnInit(): void {
  }


  closeSideBar() {
    console.log('start');
    console.log(this.curWith);
    let classList = (document.querySelector('.sidenav') as HTMLElement).classList;
    if (!classList.contains('transitionOn')){
      classList.replace('transitionOf','transitionOn' );
    }else {
      classList.replace('transitionOn','transitionOf' );
    }


    // if (this.currentWidth > 0) {
    //   console.log('down')
    //   for (var width = this.currentWidth; width === 0; this.currentWidth--) {
    //     delay(100);
    //     this.withStyle = 'width: ' + this.currentWidth;
    //   }
    // }else {
    // let writeStyles = (document.querySelector('.sidenav') as HTMLElement).style;
    // let readStyles = getComputedStyle((document.querySelector('.sidenav') as HTMLElement));


    // console.log(readStyles.backgroundColor)
    // console.log(readStyles.width)
    // // styles.width = '30px';
    // console.log(readStyles)
    // console.log(readStyles.backgroundColor)
    // console.log(readStyles.width)
    //
    // if (readStyles.width === '0px') {
    //   let i = 0
    //   setTimeout(()=>{
    //     while (i < 200) {
    //       i++;
    //       writeStyles.width = i + 'px'
    //     }
    //   }, 1000)
    //
    // } else if(readStyles.width === '200px'){
    //   let i = 200;
    //   setTimeout(()=>{
    //     while (i > 0) {
    //       i--;
    //       writeStyles.width = i + 'px'
    //     }
    //   }, 1000)
    //
    // }

    // }
  }
}
