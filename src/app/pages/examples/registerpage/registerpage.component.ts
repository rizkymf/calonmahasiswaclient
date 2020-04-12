import { Component, OnInit, OnDestroy, HostListener } from "@angular/core";
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatamhsService } from 'src/app/service/datamhs.service';
import { Datamhs } from 'src/app/model/datamhs';

@Component({
  selector: "app-registerpage",
  templateUrl: "registerpage.component.html"
})
export class RegisterpageComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  focus;
  focus1;
  focus2;

  isLoadingResults = false;
  mhsGroup : FormGroup;
  mhs : Datamhs;

  jurusan = "";
  namaMhs = "";
  ktpMhs = "";
  jenisKelaminMhs = "";
  emailMhs = "";
  ttlMhs = "";
  alamatMhs = "";

  ktpAyah = "";
  namaAyah = "";
  hpAyah = "";
  pekerjaanAyah = "";

  asalSekolah = "";
  jurusanSekolah = "";
  alamatSekolah = "";

  nilaiMtk = "";
  nilaiInggris = "";
  nilaiIndonesia = "";
  nilaiIPA = "";

  status = "PENDING";


  constructor(private router: Router, private service : DatamhsService, private formBuilder: FormBuilder) {}

  
  @HostListener("document:mousemove", ["$event"])
  onMouseMove(e) {
    var squares1 = document.getElementById("square1");
    var squares2 = document.getElementById("square2");
    var squares3 = document.getElementById("square3");
    var squares4 = document.getElementById("square4");
    var squares5 = document.getElementById("square5");
    var squares6 = document.getElementById("square6");
    var squares7 = document.getElementById("square7");
    var squares8 = document.getElementById("square8");

    var posX = e.clientX - window.innerWidth / 2;
    var posY = e.clientY - window.innerWidth / 6;

    squares1.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares2.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares3.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares4.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares5.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares6.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares7.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.02 +
      "deg) rotateX(" +
      posY * -0.02 +
      "deg)";
    squares8.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.02 +
      "deg) rotateX(" +
      posY * -0.02 +
      "deg)";
  }

  ngOnInit() : void {
    this.mhsGroup= this.formBuilder.group({
      jurusan:["", Validators.required],
      ktpMhs:["", Validators.required],
      namaMhs:["", Validators.required],
      jenisKelaminMhs: ["", Validators.required],
      emailMhs:["", Validators.required],
      ttlMhs:["", Validators.required],
      alamatMhs:["", Validators.required],
      ktpAyah:["", Validators.required],
      namaAyah:["", Validators.required],
      hpAyah:["", Validators.required],
      pekerjaanAyah:["", Validators.required],
      asalSekolah:["", Validators.required],
      jurusanSekolah:["", Validators.required],
      alamatSekolah:["", Validators.required],
      nilaiMtk:[0, Validators.required],
      nilaiInggris:[0, Validators.required],
      nilaiIndonesia:[0, Validators.required],
      nilaiIPA:[0, Validators.required],
      status:["PENDING", Validators.required]
    });

    var body = document.getElementsByTagName("body")[0];
    body.classList.add("register-page");
    this.onMouseMove(event);    
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("register-page");
  }
  onSubmit(){
    this.isLoadingResults = true;
    this.service.addMhs(this.mhsGroup.value).subscribe(
      (result:any) => {
        this.isLoadingResults = false;
        this.router.navigateByUrl('../home');
      }
    );
  }
}
