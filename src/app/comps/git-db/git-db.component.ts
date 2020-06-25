import { Component, OnInit } from '@angular/core';
import { GitDbService } from 'src/app/services/git-db.service';

@Component({
  selector: 'app-git-db',
  templateUrl: './git-db.component.html',
  styleUrls: ['./git-db.component.css']
})
export class GitDbComponent implements OnInit {

  constructor(public shuki:GitDbService) { }


dbAjaxContent = {}
keysArr =[]

  ngOnInit(): void {

    this.shuki.httpGet(this.shuki.urlIndwx.txt).subscribe(ajaxStringResults=>
      this.dbAjaxContent["txt"]= ajaxStringResults)

      this.shuki.httpGet(this.shuki.urlIndwx.js).subscribe(ajaxStringResults=>
        this.dbAjaxContent["js"]= ajaxStringResults)

        this.shuki.httpGet(this.shuki.urlIndwx.json).subscribe(ajaxStringResults=>
          this.dbAjaxContent["json"]= ajaxStringResults)

          this.shuki.httpGet(this.shuki.urlIndwx.html).subscribe(ajaxStringResults=>
            this.dbAjaxContent["html"]= ajaxStringResults)





      for(let key in this.shuki.urlIndwx){
        this.keysArr.push(key)

        this.shuki.httpGetTxt(this.shuki.urlIndwx[key])
        .subscribe(strREs=>
          this.dbAjaxContent[key]= strREs)
    
      }


  }

}
