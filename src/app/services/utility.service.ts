import { Component, Inject, Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';
import { CommonDialogComponent } from '../common/ḍialogs/common-dialog/common-dialog.component';
import { ConfirmDialogComponent } from '../common/ḍialogs/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor(private _snackBar: MatSnackBar, private dialog: MatDialog, private bottomSheet: MatBottomSheet) {}

  getActualPrice(amount: any, percentage: any) {
    let total = (amount * percentage) / 100;
    return Math.round(total + amount);
  }

  openBottomSheet(message:any, multiple = true) {
    let sheetRef = this.bottomSheet.open(ConfirmDialogComponent, {
      data: {
        message: message,
        multiple: multiple
      }
    });
    return sheetRef.afterDismissed().toPromise()
  }

  // SnackBar
  openSnackbar(msg: any, dataClass: any = '') {
    this._snackBar.openFromComponent(SnackbarComponent, {
      data: {
        html: msg,
        class: dataClass,
      },
      panelClass: ['custom-snackbar'],
      duration: 4000,
      verticalPosition: 'bottom',
    });
  }

  generateUID(length: number = 60) {
    return window
      .btoa(
        String.fromCharCode(
          ...window.crypto.getRandomValues(new Uint8Array(length * 2))
        )
      )
      .replace(/[+/]/g, '')
      .substring(0, length);
  }

  openCarouselDialog(images: any = [], type = 'image-gallery') {
    let slidesStore = [];
    slidesStore = images.map((item: any) => ({
      srcUrl: item,
      previewUrl: item,
    }));
    this.dialog.open(CommonDialogComponent, {
      data: {
        data: slidesStore,
        type: type,
      },
      panelClass: 'details-gallery',
      // height: '450px',
      // width: '100%'
    });
  }

  openDialog(data: any, type = 'image-gallery') {
    this.dialog.open(CommonDialogComponent, {
      data: {
        data: data,
        type: type,
      },
      panelClass: 'details-gallery',
    });
  }
}

@Component({
  template: `
    <div class="snackbar-content">
      <div [innerHTML]="data.html" [class]="data.class"></div>
      <a mat-raised-button (click)="snackBar.dismiss()">Close</a>
    </div>
  `,
  styles: [
    `
      .snackbar-content {
        display: flex;
        justify-content: space-between;
      }
    `,
  ],
})
export class SnackbarComponent {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    public snackBar: MatSnackBar
  ) {}
}
