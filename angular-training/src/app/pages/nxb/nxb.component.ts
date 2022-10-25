import { ToastrService } from 'ngx-toastr';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Page } from './../../shared/model/page';
import { NXBService } from './../../shared/services/nxb.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nxb',
  templateUrl: './nxb.component.html',
  styleUrls: ['./nxb.component.scss']
})
export class NxbComponent implements OnInit {
  items = [];
  page = new Page();
  checked=false;
  columns = [
    { name: 'id', prop: 'id', flexGrow: 1.5 },
    { name: 'ma', prop: 'ma', flexGrow: 1.5 },
    { name: 'ten', prop: 'ten', flexGrow: 1.5 },
    { name: 'trangThai', prop: 'trangThai', flexGrow: 3 },
    { name: 'diaChi', prop: 'diaChi', flexGrow: 1.5 },
    { name: 'moTa', prop: 'moTa', flexGrow: 1.5 },
    { name: 'Actions', prop: 'actions', flexGrow: 1.5},
  ];
  formGroup = this.fb.group({
    id: [''],
    ma: ['', Validators.required],
    ten: ['', [Validators.max(35)]],
    trangThai: [''],
    diaChi: [''],
    moTa: [''],

  });

  constructor(
    private fb: FormBuilder,
    private nxbservice: NXBService,
    private toastrService: ToastrService,

  ) { }

  ngOnInit(): void {
    this.prepareData();
  }
  prepareData() {
    this.getProduct();
  }
  doSubmit() {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.invalid) {
        return;
    }
    if (this.formGroup.getRawValue().id) {
        this.nxbservice.updateProduct(this.formGroup.getRawValue())
            .subscribe({
                next: () => {
                    this.toastrService.success(`Successful`);
                    this.formGroup.reset();
                    this.getProduct();
                }, error: (error) => {
                    this.toastrService.error(`Failed !!!`);
                    console.error(error);
                }
            })
    } else {
        this.nxbservice.adddProduct(this.formGroup.getRawValue())
            .subscribe(_ => {
                this.toastrService.success(`Successful`);
                this.formGroup.reset();
                this.getProduct();
            }, error => {
                this.toastrService.error(`Failed !!!`);
                console.error(error);
            });
    }

}
  getProduct() {
    this.nxbservice.getProduct()
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
    this.nxbservice.deleteProduct(id).subscribe({
      next: () => {
        this.toastrService.success(`Successful`);
        this.formGroup.reset();
        this.getProduct();
      }, error: (error) => {
        this.toastrService.error(`Failed !!!`);
        console.error(error);
      }
    })
  }
}
