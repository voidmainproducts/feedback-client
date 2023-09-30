import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{

  feedbacks:any[] = [];

  ngOnInit(): void {
    this.feedbacks = [
      {
        "id": "65179b1fe768d55d2b0c3f63",
        "ratingValue": 2,
        "fullName": "Ellison Underwood",
        "comment": "Elit sit enim adipisicing et nulla eu aliquip minim aliquip sit cillum et veniam. Pariatur anim magna cupidatat sunt velit laborum non. Ex dolor mollit aute duis laborum laborum mollit sit quis. Aliqua magna culpa sunt minim deserunt do esse laboris commodo esse dolore nostrud occaecat. Exercitation eiusmod excepteur deserunt consectetur fugiat tempor minim adipisicing officia do velit ex qui enim. Reprehenderit aute dolor adipisicing commodo velit. Mollit adipisicing qui fugiat ullamco esse sunt.\r\n",
        "timestamp": "2023-04-24T03:54:13 -06:-30"
      },
      {
        "id": "65179b1f21a5bdabc04d376a",
        "ratingValue": 5,
        "fullName": "Jenna Hancock",
        "comment": "Proident sint consectetur non irure est non mollit ullamco. Irure sunt elit enim excepteur ut eiusmod ut fugiat aliqua consequat officia. Ipsum mollit enim fugiat excepteur Lorem. Ea sit ullamco ex esse ut pariatur dolor enim consectetur fugiat excepteur aliquip irure culpa. Ad ex duis sit aute esse. Exercitation pariatur et incididunt ad sunt tempor.\r\n",
        "timestamp": "2017-10-25T12:46:30 -06:-30"
      },
      {
        "id": "65179b1fb180b347379a2fc1",
        "ratingValue": 3,
        "fullName": "Barber Alston",
        "comment": "Amet in dolore sit laboris est ipsum. Minim labore sunt esse proident quis. Veniam ut laboris tempor anim incididunt consequat cillum nisi do quis. Esse sit aute aliquip adipisicing laborum incididunt Lorem eiusmod. Non quis proident qui aliquip.\r\n",
        "timestamp": "2017-04-19T06:41:58 -06:-30"
      },
      {
        "id": "65179b1fb043b97b42e3499f",
        "ratingValue": 5,
        "fullName": "Oconnor Chandler",
        "comment": "Adipisicing amet esse ipsum laborum commodo duis minim pariatur mollit in cillum. Non tempor adipisicing cillum mollit excepteur minim magna sit voluptate dolore ex. Cillum ex ipsum sunt et reprehenderit dolore esse ad enim velit. Irure commodo occaecat ea est laborum commodo velit adipisicing. Labore sint velit anim dolor nisi eu. Labore eiusmod mollit quis minim pariatur laboris enim adipisicing consectetur laborum qui officia commodo nulla. Culpa fugiat nisi ea occaecat amet ut nisi culpa consectetur pariatur ad veniam ut.\r\n",
        "timestamp": "2017-07-29T06:17:02 -06:-30"
      },
      {
        "id": "65179b1f37e69b1a5a8a7164",
        "ratingValue": 1,
        "fullName": "Hendrix Frazier",
        "comment": "Aute amet cillum ea proident minim ullamco amet amet sunt nisi proident duis. Sit elit cillum consequat sit ipsum quis. Nulla et cupidatat mollit anim ipsum sit. Ipsum cupidatat ad qui anim laboris irure qui minim irure amet fugiat anim. Quis ea cupidatat quis id cillum aute laboris sunt mollit elit do laborum sunt sunt. Consectetur in amet ullamco do culpa quis deserunt ullamco non aute. Anim ipsum tempor fugiat tempor ut.\r\n",
        "timestamp": "2017-06-30T07:59:36 -06:-30"
      },
      {
        "id": "65179b1f2b5de5b7eb876a1a",
        "ratingValue": 4,
        "fullName": "Frederick Robles",
        "comment": "Voluptate elit tempor do id minim reprehenderit cupidatat labore. Adipisicing culpa id ullamco deserunt ex. Aliquip proident proident ipsum pariatur tempor esse et culpa do id velit cupidatat commodo duis.\r\n",
        "timestamp": "2021-03-31T02:38:48 -06:-30"
      },
      {
        "id": "65179b1f019255fb2e1bb9f8",
        "ratingValue": 5,
        "fullName": "Vanessa Mcfadden",
        "comment": "Sit nisi Lorem adipisicing voluptate incididunt consectetur est consectetur cillum elit aute. Et proident aliqua et officia irure esse eiusmod cillum id incididunt proident Lorem. Est consequat labore magna anim aliquip veniam et cupidatat aliquip dolor.\r\n",
        "timestamp": "2018-11-30T02:21:59 -06:-30"
      }
    ]
  }

}
