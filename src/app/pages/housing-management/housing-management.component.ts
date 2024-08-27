import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HousingService } from '../../services/housing.service';
import { Housing } from '../../models/housing.model';
import { AddHouseDialogComponent } from './add-house-dialog.component';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-housing-management',
  templateUrl: './housing-management.component.html',
  styleUrls: ['./housing-management.component.css']
})
export class HousingManagementComponent implements OnInit {
  houses: Housing[] = [];
  selectedHouse: Housing | null = null;

  constructor(
    private housingService: HousingService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadHouses();
  }

  loadHouses(): void {
    this.housingService.getHouses().subscribe(
      houses => this.houses = houses,
      error => console.error('Error loading houses:', error)
    );
  }

  viewHouseDetails(house: Housing): void {
    this.selectedHouse = house;
  }

  addHouse(): void {
    const dialogRef = this.dialog.open(AddHouseDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.housingService.addHouse(result).subscribe(
          newHouse => {
            this.houses.push(newHouse);
            console.log('House added successfully');
          },
          error => console.error('Error adding house:', error)
        );
      }
    });
  }

  deleteHouse(house: Housing): void {
    if (confirm(`Are you sure you want to delete the house at ${house.address}?`)) {
      this.housingService.deleteHouse(house.id).subscribe(
        () => {
          this.houses = this.houses.filter(h => h.id !== house.id);
          console.log('House deleted successfully');
        },
        error => console.error('Error deleting house:', error)
      );
    }
  }

  addComment(houseId: string, reportId: string, comment: string): void {
    this.housingService.addComment(houseId, reportId, { description: comment }).subscribe(
      updatedReport => {
        const house = this.houses.find(h => h.id === houseId);
        if (house) {
          const report = house.facilityReports.find(r => r.id === reportId);
          if (report) {
            report.comments.push(updatedReport.comments[updatedReport.comments.length - 1]);
          }
        }
      },
      error => console.error('Error adding comment:', error)
    );
  }
}

