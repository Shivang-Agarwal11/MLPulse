import { Component, Renderer, NgZone } from "@angular/core";
import { NavController, ModalController } from "ionic-angular";
import { DataStore } from "../../app/dataStore";
import { RythmPage } from "../rythm/rythm";
import { BookPage } from "../book/book";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(public navCtrl: NavController,public renderer:Renderer, public dataStore: DataStore) {}

    home_Button_8291_clickHandler() {
        this.navCtrl.push( RythmPage, {
                data: {"a":"a"}
              });
    }

    home_Button_9546_clickHandler() {
        this.navCtrl.push( RythmPage, {
                data: {"a":"a"}
              });
    }

    home_Button_4499_clickHandler() {
        this.navCtrl.push( BookPage, {
                data: {"a":"a"}
              });
    }
}
