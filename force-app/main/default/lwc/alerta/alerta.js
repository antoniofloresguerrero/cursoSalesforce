import { LightningElement } from 'lwc';
import LightningAlert from 'lightning/alert'; // ✅ CORRECTO

export default class Alerta extends LightningElement {
    async handleAlert() {
        await LightningAlert.open({
            label: '¡Felicidades!',
            message: 'Has aprobado.',
            theme: 'success'
        });
        console.log('alerta lanzada');
    }
}
