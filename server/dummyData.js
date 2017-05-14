import Poll from './models/poll';

export default function () {
  Poll.count().exec((err, count) => {
    if (count > 0) { return; }

    const name1 = 'Favorite food';
    const name2 = 'Favorite book';

    const options1 = [
      {
        name: 'chicken',
        votes: 4,
      },
      {
        name: 'pizza',
        votes: 2,
      },
      {
        name: 'chocolate',
        votes: 2,
      },
    ];

    const options2 = [
      {
        name: 'book1',
        votes: 1,
      },
      {
        name: 'book2',
        votes: 2,
      },
      {
        name: 'book3',
        votes: 2,
      },
    ];

    const poll1 = new Poll({ name: name1, options: options1 });
    const poll2 = new Poll({ name: name2, options: options2 });


    Poll.create([poll1, poll2], (error) => {
      if (!error) {
        console.log('ready to go...');
      }
    });
  });
}
