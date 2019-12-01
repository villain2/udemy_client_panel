import { Component, OnInit } from '@angular/core';
import { ClientService} from '../../services/client.service';
import { Client} from '../../models/Client';
import {Router, ActivatedRoute, Params, ActivationEnd} from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  id: string;
  client: Client;
  hasBalance: boolean = false;
  showBalanceUpdateInput: boolean = false;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    // Get id from url
    this.id = this.route.snapshot.params['id'];

    // Get the client
    this.clientService.getClient(this.id).subscribe(client => {
      // Check for null
      if (client != null) {
        if (client.balance > 0) {
          this.hasBalance = true;
        }
      }
      console.log(this.hasBalance);

      this.client = client;
    });
  }

  updateBalance() {
    this.clientService.updateClient(this.client);
    this.flashMessage.show('Balance updated', {
      cssClass: 'alert-success', timeout: 4000
    });
  }
}
