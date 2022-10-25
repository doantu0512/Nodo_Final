import { TacGiaService } from './../../shared/services/tacgia.service';
import { ToastrService } from 'ngx-toastr';
import { Validators, FormBuilder } from '@angular/forms';
import { Page } from './../../shared/model/page';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tacgia',
  templateUrl: './tacgia.component.html',
  styleUrls: ['./tacgia.component.scss']
})
export class TacgiaComponent implements OnInit {

  items = [];
  page = new Page();
  checked=false;
  columns = [
    { name: 'id', prop: 'id', flexGrow: 1.5 },
    { name: 'maTacgia', prop: 'maTacgia', flexGrow: 1.5 },
    { name: 'tenTacGia', prop: 'tenTacGia', flexGrow: 1.5 },
    { name: 'sdtTacGia', prop: 'sdtTacGia', flexGrow: 1.5 },
    { name: 'diaChiTacGia', prop: 'diaChiTacGia', flexGrow: 1.5 },
    { name: 'moTaTacgia', prop: 'moTaTacGia', flexGrow: 1.5 },
    { name: 'Actions', prop: 'actions', flexGrow: 1.5},
  ];
  formGroup = this.fb.group({
    id: [''],
    maTacgia: ['', Validators.required],
    tenTacGia: ['', [Validators.max(35)]],
    sdtTacGia:[''],
    diaChiTacGia: [''],
    moTaTacGia: [''],

  });

  constructor(
    private fb: FormBuilder,
    private tacgiaservice: TacGiaService,
    private toastrService: ToastrService,

  ) { }

  ngOnInit(): void {
    this.prepareData();
  }
  prepareData() {
    this.getTacgia();
  }
  doSubmit() {
    console.log("hhhhhhhhhhh",this.formGroup.value);
    this.formGroup.markAllAsTouched();
    if (this.formGroup.invalid) {
        return;
    }
    if (this.formGroup.getRawValue().id) {
     
      
        this.tacgiaservice.updateTacgia(this.formGroup.getRawValue())
            .subscribe({
                next: () => {
                    this.toastrService.success(`Successful`);
                    this.formGroup.reset();
                    this.getTacgia();
                }, error: (error) => {
                    this.toastrService.error(`Failed !!!`);
                    console.error(error);
                }
            })
    } else {
        this.tacgiaservice.addTacgia(this.formGroup.getRawValue())
            .subscribe(_ => {
                this.toastrService.success(`Successful`);
                this.formGroup.reset();
                this.getTacgia();
            }, error => {
                this.toastrService.error(`Failed !!!`);
                console.error(error);
            });
    }

}
  getTacgia() {
    this.tacgiaservice.getTacgia()
      .subscribe((next: any) => {
        console.log('next', next);
        this.items = next.data;
      });
  }
  edit(row: any) {
    console.log(row,'===');
    console.log(this.formGroup,'===');
    // if(row.trangThai===1){
    //   this.checked=true;
    // }else{
    //   this.checked=true;
    // }
    this.formGroup.patchValue(row); 
  }
  delete(id: any) {
    this.tacgiaservice.deleteTacgia(id).subscribe({
      next: () => {
        this.toastrService.success(`Successful`);
        this.formGroup.reset();
        this.getTacgia();
      }, error: (error) => {
        this.toastrService.error(`Failed !!!`);
        console.error(error);
      }
    })
  }
}
