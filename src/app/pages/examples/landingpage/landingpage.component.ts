import { Component, OnInit, OnDestroy } from "@angular/core";
import Chart from "chart.js";
import { DatamhsService } from 'src/app/service/datamhs.service';
import { Datamhs } from 'src/app/model/datamhs';
import { User } from 'src/app/model/user';
import { ListmhsService } from 'src/app/service/listmhs.service';

@Component({
  selector: "app-landingpage",
  templateUrl: "landingpage.component.html"
})
export class LandingpageComponent implements OnInit, OnDestroy {
  selectedMhs : Datamhs;
  isCollapsed = true;
  newMhs : boolean;
  cols : any[];
  datas : Datamhs[];
  mhs : Datamhs = new Datamhs();
  status : string;
  displayDialog : boolean;

  constructor(private service : DatamhsService, private edit: ListmhsService) {
    service.getCalonMhs().subscribe(
      result => this.datas = result,
      err => console.log("Error!, " + JSON.stringify(err)),
      () => console.log("done!")
    );
  }

  onAccept(){
    let data = [...this.datas];
    data[this.datas.indexOf(this.selectedMhs)] = this.mhs;
    this.service.accMhs(this.mhs).subscribe((res:any) => this.mhs = res)
    this.datas = data;
    this.mhs = null;
    this.displayDialog = false;
  }

  onReject(){
    let data = [...this.datas];
    data[this.datas.indexOf(this.selectedMhs)] = this.mhs;
    this.service.rejectMhs(this.mhs).subscribe((res:any) => this.mhs = res)
    this.datas = data;
    this.mhs = null;
    this.displayDialog = false;
  }

  cloneData(dt : Datamhs): Datamhs {
    let d = {};
    for(let prop in dt){
      d[prop] = dt[prop];
    }
    return dt;
  }

  onRowSelect(event) {
    this.newMhs = false
    this.mhs = this.cloneData(event.data)
    this.displayDialog = true
  }

  ngOnInit() {
    this.cols = [
      {field: 'namaMhs', header:'Nama'},
      {field: 'jenisKelaminMhs', header:'Jenis Kelamin'},
      {field: 'asalSekolah', header:'Asal Sekolah'},
      {field: 'jurusanSekolah', header:'Jurusan Sekolah'},
      {field: 'nilaiMtk', header:'Matematika'},
      {field: 'nilaiIndonesia', header:'Bhs.Indonesia'},
      {field: 'nilaiInggris', header:'Bhs.Inggris'},
      {field: 'nilaiIPA', header:'IPA'},
      {field: 'jurusan', header:'Jurusan'},
      {field: 'status', header:'Status'}
    ]
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("landing-page");

    var canvas: any = document.getElementById("chartBig");
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 350, 0, 50);
    gradientFill.addColorStop(0, "rgba(228, 76, 196, 0.0)");
    gradientFill.addColorStop(1, "rgba(228, 76, 196, 0.14)");
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("landing-page");
  }
}
