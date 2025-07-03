import { LightningElement } from 'lwc';
import LightningAlert from 'lightning/Alert';
export default class Alerta extends LightningElement {
async handleAlert(){
    await LightningAlert.open({
        label: ' Congratulations',
        message: 'you have passed',
        theme:'success'
    });
    console.log('alerta');
}
}