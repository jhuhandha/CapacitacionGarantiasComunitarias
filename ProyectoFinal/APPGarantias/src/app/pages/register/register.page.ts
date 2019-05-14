import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController, ToastController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';

import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public onRegisterForm: FormGroup;

  public id_onesignal : string = null;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private usuarioService : UsuarioService,
    private storage: Storage,
    private router : Router,
    public toastController: ToastController
  ) { }

  async presentToast(mensaje, color) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 5000,
      position: 'top',
      color: color
    });
    toast.present();
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    this.onRegisterForm = this.formBuilder.group({
      'nombre': [null, Validators.compose([
        Validators.required
      ])],
      'apellido': [null, Validators.compose([
        Validators.required
      ])],
      'telefono': [null, Validators.compose([
        Validators.required
      ])],
      'correo': [null, Validators.compose([
        Validators.required,
        Validators.email
      ])],
      'usuario': [null, Validators.compose([
        Validators.required
      ])],
      'clave': [null, Validators.compose([
        Validators.required
      ])]
    });

    
  }

  async signUp() {

    this.id_onesignal = await this.storage.get("id_onesignal");

    this.onRegisterForm.value.push_id = this.id_onesignal;

    this.usuarioService.guardar(this.onRegisterForm.value).subscribe(data => {
      if(data.ok){
        this.storage.set("token", data.token);
        this.storage.set("usuario", data.usuario);

        this.router.navigate(["/home-results"]);
      }else{
        console.log(data.err);
        this.presentToast("Error", "danger");
      }
    }, fail => {
        this.presentToast(fail.error.err.message, "danger");
    })

    // const loader = await this.loadingCtrl.create({
    //   duration: 2000
    // });


    // loader.present();
    // loader.onWillDismiss().then(() => {
    //   this.navCtrl.navigateRoot('/home-results');
    // });
  }

  // // //
  goToLogin() {
    this.navCtrl.navigateRoot('/');
  }
}
