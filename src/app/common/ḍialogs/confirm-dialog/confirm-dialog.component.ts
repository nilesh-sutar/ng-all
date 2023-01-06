import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<ConfirmDialogComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) { }

  ngOnInit(): void {
    if (!this.data?.multiple) {
      setTimeout(() => {
        this.onClick('cancel')
      }, 2000);
    }
  }

  onClick(action:any) {
    this.bottomSheetRef.dismiss({
      message: action
    })
  }

}
