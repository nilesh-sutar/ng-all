import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { GalleryItem, ImageItem } from 'ng-gallery';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  templateUrl: './common-dialog.component.html',
  styleUrls: ['./common-dialog.component.scss']
})
export class CommonDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CommonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder,private uService: UtilityService) {
    // dialogRef.disableClose = true;
  }

  items!: GalleryItem[];
  imageData:any;

  ngOnInit(): void {
    console.log(this.data);
    if (this.data) {
      this.imageData = this.data.data;
      if (this.data.type == 'image-gallery') {
        // Creat gallery items
        this.items = this.imageData.map((item:any) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));
      }
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
