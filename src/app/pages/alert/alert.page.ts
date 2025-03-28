import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  standalone: false
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'A Short Title Is Best',
      subHeader: 'A Sub Header Is Optional',
      message: 'A message should be a short, complete sentence.',
      buttons: ['Action'],
    });

    await alert.present();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message with multiple buttons.',
      buttons: [
        {
          text: 'Ok!',
          handler: () => {
            console.log('click en Ok');
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'rojo',
        }
      ]
      });
      await alert.present();
    }

    async presentAlertPrompt() {
      const alert = await this.alertCtrl.create({
        cssClass: 'my-custom-class',
        header: 'Prompt!',
        inputs: [
          {
            name: 'name1',
            type: 'text',
            placeholder: 'Placeholder 1'
          },
          {
            name: 'name2',
            type: 'text',
            id: 'name2-id',
            value: 'hello',
            placeholder: 'Placeholder 2'
          },
          //mutiline input
          {
            name: 'paragraph',
            id: 'paragraph',
            type: 'textarea',
            placeholder: 'Placeholder 3'
          },
          {
            name: 'name3',
            value: 'http://ionicframework.com',
            type: 'url',
            placeholder: 'Favorite site ever'
          },
          //input date with min and max
          {
            name: 'name4',
            type: 'date',
            min: '2017-03-01',
            max: '2018-01-12'
          },
          //input date with min nor max
          {
            name: 'name5',
            type: 'date',
          },
          {
            name: 'name6',
            type: 'number',
            min: -5,
            max: 10
          },
          {
            name: 'name7',
            type: 'number',
          },
          {
            name: 'name8',
            type: 'password',
            placeholder: 'Advanced Attributes',
            cssClass: 'specialClass',
            attributes: {
              maxlength: 4,
              inputmode: 'decimal'
            }
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, 
          {
            text: 'Ok',
            handler: ( data:any ) => {
              console.log(data);
            }
          }
        ]
      });

      await alert.present();
    }

}
