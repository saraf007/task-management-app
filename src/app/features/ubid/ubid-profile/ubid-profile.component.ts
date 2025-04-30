import { Component, OnInit } from '@angular/core';
import { UbidProfileService } from '../../../core/services/ubid-profile.service';
import { UserProfile } from '../../models/user-profile.model';
import { Console } from 'console';

@Component({
  standalone: false,
  selector: 'app-ubid-profile',
  templateUrl: './ubid-profile.component.html',
})
export class UbidProfileComponent implements OnInit {
  userProfile: UserProfile = {
    preferredEmail: '',
    confirmationEmailEnabled: false,
    walkMeGuidanceEnabled: true
  };

  isLoading = false;

  constructor(private ubidProfileService: UbidProfileService) {}

  ngOnInit(): void {
    this.fetchUserProfile();
  }

  fetchUserProfile() {
    this.isLoading = true;
    this.ubidProfileService.getUserProfile().subscribe({
      next: (data) => {
        this.userProfile = data;
        this.isLoading = false;
        console.log('User Profile:', this.userProfile);
      },
      error: () => {
        this.isLoading = false;
        //alert('Failed to load profile');
      }
    });
  }

  saveProfile() {
    this.ubidProfileService.updateUserProfile(this.userProfile).subscribe({
      next: () => alert('Profile updated successfully!'),
      error: () => alert('Failed to update profile')
    });
  }

  resetDefaults() {
    this.ubidProfileService.resetToDefaults().subscribe({
      next: (defaults) => {
        this.userProfile = defaults;
      },
      error: () => alert('Failed to reset to defaults')
    });
  }
}
