// Angular
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';

// Models
import { Detail } from 'src/app/models';

// Services
import { MainService } from 'src/app/services';

@Component({
  selector: 'es-detail',
  template: `
    <es-header-bar
      [showBack]="true">
    </es-header-bar>

    <div class="container">

      <es-divider
        [repoLink]="data.repoLink"
        [text]="data.title">
      </es-divider>

      <body class="detail-container">

        <img [src]="data.splashImage" class="body-image" />

        <div>
          {{ data.content }}
        </div>

      </body>
    </div>
  `,
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  data: Detail;

  constructor(
    private mainService: MainService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const detailData = this.mainService.getDetail(id);

    // If we are in a route with an invalid ID, redirect to main component
    if (detailData === undefined) {
      this.router.navigate(['main']);
    } else {
      this.data = detailData;
    }
  }

}
