import { Component } from '@angular/core';
<<<<<<< HEAD
=======
import { SwUpdate,  VersionEvent, VersionReadyEvent} from '@angular/service-worker';
>>>>>>> 260a420b309bbbd98b567b81a1fca054245b0f87

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  installPrompt: any;

<<<<<<< HEAD
  constructor() {
  }
=======
  constructor(private swUpdate: SwUpdate) {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates.subscribe((event: VersionEvent) => {
        if (event.type === 'VERSION_READY') {
          const versionReadyEvent = event as VersionReadyEvent;
          if (confirm(`New version ${versionReadyEvent.latestVersion.hash} available. Load new version?`)) {
            window.location.reload();
          }
        }
      });
    }
  }

  getInstallPrompt(): void {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.installPrompt = e;
    });
  }

  askUserToInstall() {
    this.installPrompt.prompt();  
  }

>>>>>>> 260a420b309bbbd98b567b81a1fca054245b0f87
}
