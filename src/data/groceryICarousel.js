class Grocery {
  constructor(id, title, body, imageUrl) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.imageUrl = imageUrl;
  }
}
export const GROCERIES = [
  new Grocery(
    'm12',
    'Aenean leo',
    'Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
    'https://img.freepik.com/free-photo/healthy-vegetables-wooden-table_1150-38014.jpg?w=2000',
  ),
  new Grocery(
    'a23',
    'In turpis',
    'Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ',
    'https://www.cdc.gov/foodsafety/images/comms/features/GettyImages-1247930626-500px.jpg?_=00453',
  ),
  new Grocery(
    'b21',
    'Lorem Ipsum',
    'Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.',
    'https://staticfanpage.akamaized.net/wp-content/uploads/sites/22/2018/12/vegetables.jpg',
  ),
];
