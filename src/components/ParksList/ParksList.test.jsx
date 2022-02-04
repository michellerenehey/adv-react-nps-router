import { render, screen } from '@testing-library/react';
import ParksList from './ParksList';
// import { mockResponse } from '../../views/Home/Home.test';
import { MemoryRouter } from 'react-router-dom';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
import userEvent from '@testing-library/user-event';

const parkResponse = [
  {
    id: '77E0D7F0-1942-494A-ACE2-9004D2BDC59E',
    url: 'https://www.nps.gov/abli/index.htm',
    fullName: 'Abraham Lincoln Birthplace National Historical Park',
    description:
      "For over a century people from around the world have come to rural Central Kentucky to honor the humble beginnings of our 16th president, Abraham Lincoln. His early life on Kentucky's frontier shaped his character and prepared him to lead the nation through Civil War. The country's first memorial to Lincoln, built with donations from young and old, enshrines the symbolic birthplace cabin.",
    activities: [
      {
        id: '13A57703-BB1A-41A2-94B8-53B692EB7238',
        name: 'Astronomy',
      },
      {
        id: 'D37A0003-8317-4F04-8FB0-4CF0A272E195',
        name: 'Stargazing',
      },
      {
        id: '1DFACD97-1B9C-4F5A-80F2-05593604799E',
        name: 'Food',
      },
      {
        id: 'C6D3230A-2CEA-4AFE-BFF3-DC1E2C2C4BB4',
        name: 'Picnicking',
      },
      {
        id: 'DF4A35E0-7983-4A3E-BC47-F37B872B0F25',
        name: 'Junior Ranger Program',
      },
      {
        id: '0B685688-3405-4E2A-ABBA-E3069492EC50',
        name: 'Wildlife Watching',
      },
      {
        id: '5A2C91D1-50EC-4B24-8BED-A2E11A1892DF',
        name: 'Birdwatching',
      },
      {
        id: '24380E3F-AD9D-4E38-BF13-C8EEB21893E7',
        name: 'Shopping',
      },
      {
        id: '467DC8B8-0B7D-436D-A026-80A22358F615',
        name: 'Bookstore and Park Store',
      },
      {
        id: '43800AD1-D439-40F3-AAB3-9FB651FE45BB',
        name: 'Gift Shop and Souvenirs',
      },
    ],
    states: 'KY',
    images: [
      {
        credit: 'NPS Photo',
        title: 'The Memorial Building with fall colors',
        altText: 'The Memorial Building surrounded by fall colors',
        caption:
          'Over 200,000 people a year come to walk up the steps of the Memorial Building to visit the site where Abraham Lincoln was born',
        url: 'https://www.nps.gov/common/uploads/structured_data/3C861078-1DD8-B71B-0B774A242EF6A706.jpg',
      },
      {
        credit: 'NPS Photo',
        title: 'The Memorial Building',
        altText: 'The first memorial erected to honor Abraham Lincoln',
        caption:
          'The Memorial Building constructed on the traditional site of the birth of Abraham Lincoln.',
        url: 'https://www.nps.gov/common/uploads/structured_data/3C861263-1DD8-B71B-0B71EF9B95F9644F.jpg',
      },
      {
        credit: 'NPS Photo',
        title: 'The Symbolic Birth Cabin of Abraham Lincoln',
        altText:
          'The symbolic birth cabin on the traditional site of the birth of Abraham Lincoln.',
        caption: 'The symbolic birth cabin of Abraham Lincoln.',
        url: 'https://www.nps.gov/common/uploads/structured_data/3C86137D-1DD8-B71B-0B978BACD7EBAEF1.jpg',
      },
      {
        credit: 'NPS Photo',
        title: 'Statue of the Lincoln Family in the Visitor Center',
        altText: "Statue of the Lincoln family in the park's Visitor Center",
        caption: 'Visitors to the park can view the statue of the Lincoln family.',
        url: 'https://www.nps.gov/common/uploads/structured_data/3C8614D1-1DD8-B71B-0B1AF72CA452B051.jpg',
      },
    ],
  },
  {
    id: '6DA17C86-088E-4B4D-B862-7C1BD5CF236B',
    url: 'https://www.nps.gov/acad/index.htm',
    fullName: 'Acadia National Park',
    description:
      "Acadia National Park protects the natural beauty of the highest rocky headlands along the Atlantic coastline of the United States, an abundance of habitats, and a rich cultural heritage. At 3.5 million visits a year, it's one of the top 10 most-visited national parks in the United States. Visitors enjoy 27 miles of historic motor roads, 158 miles of hiking trails, and 45 miles of carriage roads.",
    activities: [
      {
        id: '09DF0950-D319-4557-A57E-04CD2F63FF42',
        name: 'Arts and Culture',
      },
      {
        id: 'FAED7F97-3474-4C21-AB42-FB0768A2F826',
        name: 'Cultural Demonstrations',
      },
      {
        id: '13A57703-BB1A-41A2-94B8-53B692EB7238',
        name: 'Astronomy',
      },
      {
        id: 'D37A0003-8317-4F04-8FB0-4CF0A272E195',
        name: 'Stargazing',
      },
      {
        id: '7CE6E935-F839-4FEC-A63E-052B1DEF39D2',
        name: 'Biking',
      },
      {
        id: '071BA73C-1D3C-46D4-A53C-00D5602F7F0E',
        name: 'Boating',
      },
      {
        id: 'A59947B7-3376-49B4-AD02-C0423E08C5F7',
        name: 'Camping',
      },
      {
        id: '7CFF5F03-5ECC-4F5A-8572-75D1F0976C0C',
        name: 'Group Camping',
      },
      {
        id: 'B12FAAB9-713F-4B38-83E4-A273F5A43C77',
        name: 'Climbing',
      },
      {
        id: '87D3B1CD-3903-4561-ABB1-2DD870C43F2F',
        name: 'Rock Climbing',
      },
      {
        id: 'C11D3746-5063-4BD0-B245-7178D1AD866C',
        name: 'Compass and GPS',
      },
      {
        id: 'CA3641A0-FADC-497F-B036-3FE426D0DDCC',
        name: 'Geocaching',
      },
      {
        id: 'AE42B46C-E4B7-4889-A122-08FE180371AE',
        name: 'Fishing',
      },
      {
        id: '25FB188F-5AAD-459A-9092-28A9801709FF',
        name: 'Freshwater Fishing',
      },
      {
        id: '9BC03FAF-28F1-4609-BF6F-643F58071AED',
        name: 'Fly Fishing',
      },
      {
        id: '17411C8D-5769-4D0F-ABD1-52ED03840C18',
        name: 'Saltwater Fishing',
      },
      {
        id: '1DFACD97-1B9C-4F5A-80F2-05593604799E',
        name: 'Food',
      },
      {
        id: 'C6D3230A-2CEA-4AFE-BFF3-DC1E2C2C4BB4',
        name: 'Picnicking',
      },
      {
        id: 'B33DC9B6-0B7D-4322-BAD7-A13A34C584A3',
        name: 'Guided Tours',
      },
      {
        id: '3DE599E2-22ED-40BF-B383-EDA073563C1E',
        name: 'Bus/Shuttle Guided Tour',
      },
      {
        id: '5A241412-0CFB-497A-9B5F-0AB8C03CDE72',
        name: 'Boat Tour',
      },
      {
        id: '42FD78B9-2B90-4AA9-BC43-F10E9FEA8B5A',
        name: 'Hands-On',
      },
      {
        id: '31F88DA6-696F-441F-89CF-D7B1415C4CB9',
        name: 'Citizen Science',
      },
      {
        id: 'BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA',
        name: 'Hiking',
      },
      {
        id: '45261C0A-00D8-4C27-A1F8-029F933A0D34',
        name: 'Front-Country Hiking',
      },
      {
        id: '0307955A-B65C-4CE4-A780-EB36BAAADF0B',
        name: 'Horse Trekking',
      },
      {
        id: '1886DA47-0AEC-4568-B9C2-8E9BC316AAAC',
        name: 'Horseback Riding',
      },
      {
        id: '5FF5B286-E9C3-430E-B612-3380D8138600',
        name: 'Ice Skating',
      },
      {
        id: '4D224BCA-C127-408B-AC75-A51563C42411',
        name: 'Paddling',
      },
      {
        id: '21DB3AFC-8AAC-4665-BC1F-7198C0685983',
        name: 'Canoeing',
      },
      {
        id: 'F353A9ED-4A08-456E-8DEC-E61974D0FEB6',
        name: 'Kayaking',
      },
      {
        id: 'B3EF12AF-D951-419E-BD3C-6B36CBCC1E16',
        name: 'Stand Up Paddleboarding',
      },
      {
        id: 'DF4A35E0-7983-4A3E-BC47-F37B872B0F25',
        name: 'Junior Ranger Program',
      },
      {
        id: 'F9B1D433-6B86-4804-AED7-B50A519A3B7C',
        name: 'Skiing',
      },
      {
        id: 'EAB1EBDE-5B72-493F-8F8F-0EE5B1724436',
        name: 'Cross-Country Skiing',
      },
      {
        id: 'C38B3C62-1BBF-4EA1-A1A2-35DE21B74C17',
        name: 'Snow Play',
      },
      {
        id: '7C912B83-1B1B-4807-9B66-97C12211E48E',
        name: 'Snowmobiling',
      },
      {
        id: '01D717BC-18BB-4FE4-95BA-6B13AD702038',
        name: 'Snowshoeing',
      },
      {
        id: '587BB2D3-EC35-41B2-B3F7-A39E2B088AEE',
        name: 'Swimming',
      },
      {
        id: '82C3230F-6F87-452C-A01B-F8458867B26A',
        name: 'Freshwater Swimming',
      },
      {
        id: 'C2801992-F34D-4974-A0F2-80FF04309EE4',
        name: 'Saltwater Swimming',
      },
      {
        id: '0B685688-3405-4E2A-ABBA-E3069492EC50',
        name: 'Wildlife Watching',
      },
      {
        id: '5A2C91D1-50EC-4B24-8BED-A2E11A1892DF',
        name: 'Birdwatching',
      },
      {
        id: '0C0D142F-06B5-4BE1-8B44-491B90F93DEB',
        name: 'Park Film',
      },
      {
        id: '24380E3F-AD9D-4E38-BF13-C8EEB21893E7',
        name: 'Shopping',
      },
      {
        id: '467DC8B8-0B7D-436D-A026-80A22358F615',
        name: 'Bookstore and Park Store',
      },
    ],
    states: 'ME',
    images: [
      {
        credit: 'NPS / Kristi Rugg',
        title: "Acadia's rocky coastline",
        altText:
          'Large puffy clouds dot a brilliant blue sky as wave crash against the rocky coastline of Acadia.',
        caption: 'Millions of people come to Acadia for our distinctive rocky coastline.',
        url: 'https://www.nps.gov/common/uploads/structured_data/3C7B45AE-1DD8-B71B-0B7EE131C7DFC2F5.jpg',
      },
      {
        credit: 'NPS / Kristi Rugg',
        title: 'Heavy snow-laden trees',
        altText:
          'Hiking tracks carved through three feet of snow wind through a heavy snow-laden forest.',
        caption: 'During the colder months snows transform our landscape into a winter wonderland.',
        url: 'https://www.nps.gov/common/uploads/structured_data/3C7B4BEC-1DD8-B71B-0B2CF833F93140FF.jpg',
      },
      {
        credit: 'NPS / Kristi Rugg',
        title: 'Sunset atop Cadillac Mountain',
        altText:
          'A brilliant sunset filled with hues of blue, red, orange, magenta, and purple highlight the sky.',
        caption:
          'As the tallest point on the eastern seaboard Cadillac Mountain provides fantastic viewpoints.',
        url: 'https://www.nps.gov/common/uploads/structured_data/3C7B477B-1DD8-B71B-0BCB48E009241BAA.jpg',
      },
      {
        credit: 'NPS / Kristi Rugg',
        title: 'Climbing The Precipice',
        altText: 'Two hikers ascend a sheer cliff trail by way of historic iron rung ladders.',
        caption:
          "Whether it's a stroll along Ocean Path or a difficult ascent up The Precipice, there are hiking trails for everyone!",
        url: 'https://www.nps.gov/common/uploads/structured_data/3C7B48F9-1DD8-B71B-0BD3B413E58978F8.jpg',
      },
    ],
  },
  {
    id: 'E4C7784E-66A0-4D44-87D0-3E072F5FEF43',
    url: 'https://www.nps.gov/adam/index.htm',
    fullName: 'Adams National Historical Park',
    description:
      'From the sweet little farm at the foot of Penn’s Hill to the gentleman’s country estate at Peace field, Adams National Historical Park is the story of “heroes, statesman, philosophers … and learned women” whose ideas and actions helped to transform thirteen disparate colonies into one united nation.',
    activities: [
      {
        id: 'B33DC9B6-0B7D-4322-BAD7-A13A34C584A3',
        name: 'Guided Tours',
      },
      {
        id: 'B204DE60-5A24-43DD-8902-C81625A09A74',
        name: 'Living History',
      },
      {
        id: '28880A5B-3D29-41AC-BD8B-24743E7A070F',
        name: 'First Person Interpretation',
      },
      {
        id: '0C0D142F-06B5-4BE1-8B44-491B90F93DEB',
        name: 'Park Film',
      },
      {
        id: '24380E3F-AD9D-4E38-BF13-C8EEB21893E7',
        name: 'Shopping',
      },
      {
        id: '467DC8B8-0B7D-436D-A026-80A22358F615',
        name: 'Bookstore and Park Store',
      },
    ],
    states: 'MA',
    images: [
      {
        credit: 'NPS Photo',
        title: 'The John and John Quincy Adams Birthplaces',
        altText: 'The Birthplaces of Presidents John Adams (right) and John Quincy Adams (left)',
        caption:
          'The Birthplaces of John and John Quincy Adams sit right next  to each other on Franklin Street.',
        url: 'https://www.nps.gov/common/uploads/structured_data/3C7C7416-1DD8-B71B-0B1B30D0827F7C74.jpg',
      },
      {
        credit: 'NPS Photo',
        title: 'The Birthplace of John Adams',
        altText: 'The Birthplace of John Adams',
        caption: 'The house where President John Adams was born in 1735.',
        url: 'https://www.nps.gov/common/uploads/structured_data/3C7C7565-1DD8-B71B-0BEC729A3E865792.jpg',
      },
      {
        credit: 'NPS Photo',
        title: 'The Birthplace of John Quincy Adams',
        altText: 'The Birthplace of John Quincy Adams',
        caption: 'The house where President John Quincy Adams was born in 1767.',
        url: 'https://www.nps.gov/common/uploads/structured_data/3C7C76BE-1DD8-B71B-0B6DFACFB45AC5A4.jpg',
      },
      {
        credit: 'NPS Photo',
        title: 'Old House at Peace field',
        altText: 'A view of Old House at Peace field',
        caption:
          'Old House at Peace field, where four generations of the Adams family lived from 1788 to 1927.',
        url: 'https://www.nps.gov/common/uploads/structured_data/3C7C780E-1DD8-B71B-0B18B8DB9F39704F.jpg',
      },
      {
        credit: 'NPS Photo / Betty Brown',
        title: 'The Paneled Room',
        altText: 'The Paneled Room located inside Old House at Peace field.',
        caption: 'The Paneled Room greets everyone who enters Old House at Peace field.',
        url: 'https://www.nps.gov/common/uploads/structured_data/3C7C7945-1DD8-B71B-0BE14B48DD78B777.jpg',
      },
      {
        credit: 'NPS Photo',
        title: 'The Stone Library',
        altText: 'The Stone Library located outside Old House at Peace field.',
        caption: 'The Stone Library houses up to 14,000 books belonging to the Adams family.',
        url: 'https://www.nps.gov/common/uploads/structured_data/3C7C7A77-1DD8-B71B-0BDA92321AD899C5.jpg',
      },
      {
        credit: 'NPS Photo',
        title: 'Inside the Stone Library',
        altText: 'Inside the Stone Library',
        caption: 'A view into the Stone Library',
        url: 'https://www.nps.gov/common/uploads/structured_data/3C7C7BE3-1DD8-B71B-0B864F7398605B7E.jpg',
      },
      {
        credit: 'NPS Photo',
        title: 'The Gardens Located at Old House at Peace field',
        altText: 'The gardens located at Old House at Peace field.',
        caption:
          'The gardens located by Old House at Peace field bloom in every color you can imagine.',
        url: 'https://www.nps.gov/common/uploads/structured_data/3C7C7D4E-1DD8-B71B-0B48B5CDE41703D7.jpg',
      },
    ],
  },
  {
    id: '1A47416F-DAA3-4137-9F30-14AF86B4E547',
    url: 'https://www.nps.gov/afam/index.htm',
    fullName: 'African American Civil War Memorial',
    description:
      'Over 200,000 African-American soldiers and sailors served in the U.S. Army and Navy during the Civil War. Their service helped to end the war and free over four million slaves. The African American Civil War Memorial honors their service and sacrifice.',
    activities: [
      {
        id: 'B33DC9B6-0B7D-4322-BAD7-A13A34C584A3',
        name: 'Guided Tours',
      },
      {
        id: 'A0631906-9672-4583-91DE-113B93DB6B6E',
        name: 'Self-Guided Tours - Walking',
      },
    ],
    states: 'DC',
    images: [
      {
        credit: 'NPS Photo',
        title: 'African American Civil War Statue',
        altText: 'Site Statue',
        caption: 'A poignant reminder of our nations past',
        url: 'https://www.nps.gov/common/uploads/structured_data/3C816B50-1DD8-B71B-0BF380049FB6B6A2.jpg',
      },
      {
        credit: 'NPS Photo',
        title: 'African American Sailor',
        altText: 'African American Sailor Close up',
        caption: 'African American Civil War Sailor',
        url: 'https://www.nps.gov/common/uploads/structured_data/3C816C97-1DD8-B71B-0B7B2A0DD09C870A.jpg',
      },
      {
        credit: 'NPS Photo',
        title: 'African American Soldier',
        altText: 'African American Soldier Close up',
        caption: 'African American Civil War Soldier',
        url: 'https://www.nps.gov/common/uploads/structured_data/3C816DF6-1DD8-B71B-0B5D792777650EA4.jpg',
      },
      {
        credit: 'NPS / Liz Macro',
        title: 'African American Civil War Memorial',
        altText: 'Bronze statue of African American Civil War soldiers.',
        caption: 'African American Civil War Memorial',
        url: 'https://www.nps.gov/common/uploads/structured_data/1DA05382-E7D7-BD05-0A4A7ED42138D49D.jpg',
      },
      {
        credit: 'NPS / Liz Macro',
        title: 'African American Civil War Memorial',
        altText: 'Bronze statue of African American Civil War soldier.',
        caption: 'African American Civil War Memorial',
        url: 'https://www.nps.gov/common/uploads/structured_data/1E29A16A-C551-66A4-9DABCD61403D61C7.jpg',
      },
    ],
  },
  {
    id: 'E6E1D22A-7A89-47F8-813C-B611059A8CF9',
    url: 'https://www.nps.gov/afbg/index.htm',
    fullName: 'African Burial Ground National Monument',
    description:
      'African Burial Ground is the oldest and largest known excavated burial ground in North America for both free and enslaved Africans. It protects the historic role slavery played in building New York',
    activities: [
      {
        id: '09DF0950-D319-4557-A57E-04CD2F63FF42',
        name: 'Arts and Culture',
      },
      {
        id: 'B33DC9B6-0B7D-4322-BAD7-A13A34C584A3',
        name: 'Guided Tours',
      },
      {
        id: 'DF4A35E0-7983-4A3E-BC47-F37B872B0F25',
        name: 'Junior Ranger Program',
      },
      {
        id: '0C0D142F-06B5-4BE1-8B44-491B90F93DEB',
        name: 'Park Film',
      },
      {
        id: 'C8F98B28-3C10-41AE-AA99-092B3B398C43',
        name: 'Museum Exhibits',
      },
      {
        id: '24380E3F-AD9D-4E38-BF13-C8EEB21893E7',
        name: 'Shopping',
      },
      {
        id: '467DC8B8-0B7D-436D-A026-80A22358F615',
        name: 'Bookstore and Park Store',
      },
    ],
    states: 'NY',
    images: [
      {
        credit: 'NPS Photo',
        title: 'African Burial Ground Memorial',
        altText: 'African Burial Ground Memorial',
        caption: 'African Burial Ground Memorial',
        url: 'https://www.nps.gov/common/uploads/structured_data/3C8554EA-1DD8-B71B-0BE6FF3BF04C18B8.jpg',
      },
      {
        credit: 'NPS Photo',
        title: 'Visitor Center Entrance',
        altText: 'Entrance to visitor center with four banners above doorway.',
        caption: 'Entrance to the African Burial Ground National Monument visitor center.',
        url: 'https://www.nps.gov/common/uploads/structured_data/7DD7997F-1DD8-B71B-0B31BFA87CFF6B77.jpg',
      },
      {
        credit: 'NPS Photo',
        title: 'Outdoor Memorial Entrance',
        altText: 'Outdoor memorial entrance with closed gate.',
        caption: 'Outdoor memorial entrance with closed gate.',
        url: 'https://www.nps.gov/common/uploads/structured_data/7DE9E906-1DD8-B71B-0BE6C87ADBA53620.jpg',
      },
      {
        credit: 'NPS Photo',
        title: "Memorial's circle of diaspora.",
        altText: "Memorial's circle of diaspora.",
        caption: "Memorial's circle of diaspora.",
        url: 'https://www.nps.gov/common/uploads/structured_data/7DF18622-1DD8-B71B-0BC858B0C844569E.jpg',
      },
      {
        credit: 'NPS Photo',
        title: 'Exhibits within visitor center.',
        altText: 'Exhibits within visitor center.',
        caption: 'Exhibits within visitor center.',
        url: 'https://www.nps.gov/common/uploads/structured_data/7DF85D09-1DD8-B71B-0BAB5B558B9CEAA9.jpg',
      },
    ],
  },
  {
    id: '64B9F127-31ED-43C9-882D-D7CD471AF314',
    url: 'https://www.nps.gov/agfo/index.htm',
    fullName: 'Agate Fossil Beds National Monument',
    description:
      'In the early 1900s, paleontologists unearthed the Age of Mammals when they found full skeletons of extinct Miocene mammals in the hills of Nebraska -- species previously only known through fragments. At the same time, an age of friendship began between rancher James Cook and Chief Red Cloud of the Lakota. These two unprecedented events are preserved and protected here... at Agate Fossil Beds.',
    activities: [
      {
        id: '09DF0950-D319-4557-A57E-04CD2F63FF42',
        name: 'Arts and Culture',
      },
      {
        id: 'FAED7F97-3474-4C21-AB42-FB0768A2F826',
        name: 'Cultural Demonstrations',
      },
      {
        id: '13A57703-BB1A-41A2-94B8-53B692EB7238',
        name: 'Astronomy',
      },
      {
        id: 'D37A0003-8317-4F04-8FB0-4CF0A272E195',
        name: 'Stargazing',
      },
      {
        id: '1DFACD97-1B9C-4F5A-80F2-05593604799E',
        name: 'Food',
      },
      {
        id: 'C6D3230A-2CEA-4AFE-BFF3-DC1E2C2C4BB4',
        name: 'Picnicking',
      },
      {
        id: 'B33DC9B6-0B7D-4322-BAD7-A13A34C584A3',
        name: 'Guided Tours',
      },
      {
        id: 'A0631906-9672-4583-91DE-113B93DB6B6E',
        name: 'Self-Guided Tours - Walking',
      },
      {
        id: 'BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA',
        name: 'Hiking',
      },
      {
        id: 'DF4A35E0-7983-4A3E-BC47-F37B872B0F25',
        name: 'Junior Ranger Program',
      },
      {
        id: '0B685688-3405-4E2A-ABBA-E3069492EC50',
        name: 'Wildlife Watching',
      },
      {
        id: '5A2C91D1-50EC-4B24-8BED-A2E11A1892DF',
        name: 'Birdwatching',
      },
      {
        id: '0C0D142F-06B5-4BE1-8B44-491B90F93DEB',
        name: 'Park Film',
      },
      {
        id: 'C8F98B28-3C10-41AE-AA99-092B3B398C43',
        name: 'Museum Exhibits',
      },
      {
        id: '24380E3F-AD9D-4E38-BF13-C8EEB21893E7',
        name: 'Shopping',
      },
      {
        id: '467DC8B8-0B7D-436D-A026-80A22358F615',
        name: 'Bookstore and Park Store',
      },
    ],
    states: 'NE',
    images: [
      {
        credit: 'NPS Photo',
        title: 'Visitor Center on the Prairie',
        altText: 'The visitor center sits in the middle of mixed grass prairie.',
        caption:
          'From the Fossil Hills Trail the Visitor Center is a ship in a sea of prairie grasses.',
        url: 'https://www.nps.gov/common/uploads/structured_data/3C7A058F-1DD8-B71B-0B188ED102F7285F.jpg',
      },
      {
        credit: 'NPS Photo',
        title: 'The Agate Fossil Hills and Tipis',
        altText:
          'Tipis and Fossil Hills represent the two subjects that Agate Fossil Beds interprets.',
        caption:
          'One of the first impressions that visitors have are the tipis and the Fossil Hills.',
        url: 'https://www.nps.gov/common/uploads/structured_data/3C7A06A9-1DD8-B71B-0BA914D99661189C.jpg',
      },
      {
        credit: 'NPS Photo',
        title: 'A July Storm Passes',
        altText: 'Thunderheads are common in July.',
        caption:
          'Summer storms include thunderheads and lightning and can be exciting and dangerous.',
        url: 'https://www.nps.gov/common/uploads/structured_data/3C7A07B9-1DD8-B71B-0B077C3CA4979281.jpg',
      },
      {
        credit: 'NPS Photo',
        title: 'Dinohyus in the Visitor Center Fossil Diorama',
        altText: 'The Dinohyus was a scavenger, nicknamed "Terrible Pig"',
        caption:
          'Visitors stare in wonder at the huge head of the "apex" predator of the plains some 20 million years ago.',
        url: 'https://www.nps.gov/common/uploads/structured_data/3C7A08CC-1DD8-B71B-0B129817C3E756C3.jpg',
      },
      {
        credit: 'NPS Photo',
        title: 'The James H. Cook collection',
        altText: 'This buckskin shirt decorated with quills was worn by Red Cloud.',
        caption:
          'Visitors agree that this shirt decorated with quillwork and worn by Red Cloud of the Oglala Lakota is a priceless piece of history.',
        url: 'https://www.nps.gov/common/uploads/structured_data/3C7A0A12-1DD8-B71B-0BC1CC6CDF2CFD4E.jpg',
      },
    ],
  },
  {
    id: '3B8307B3-54AB-4E5F-ACBC-8DECB98AD5F1',
    url: 'https://www.nps.gov/alka/index.htm',
    fullName: 'Ala Kahakai National Historic Trail',
    description:
      'Established in 2000 to preserve, protect and interpret traditional Native Hawaiian culture and natural resources, Ala Kahakai National Historic Trail is a 175 mile corridor encompassing a network of culturally and historically significant trails. This "trail by the sea" traverses wahi pana (storied landscapes), ancient Hawaiian sites and over 200 ahupuaʻa (traditional land divisions). Connect now!',
    activities: [
      {
        id: '09DF0950-D319-4557-A57E-04CD2F63FF42',
        name: 'Arts and Culture',
      },
      {
        id: 'FAED7F97-3474-4C21-AB42-FB0768A2F826',
        name: 'Cultural Demonstrations',
      },
      {
        id: '5F723BAD-7359-48FC-98FA-631592256E35',
        name: 'Auto and ATV',
      },
      {
        id: '0B4A5320-216D-451A-9990-626E1D5ACE28',
        name: 'Scenic Driving',
      },
      {
        id: '7CE6E935-F839-4FEC-A63E-052B1DEF39D2',
        name: 'Biking',
      },
      {
        id: '299CB934-88DC-474F-A33D-E43E29A149C2',
        name: 'Mountain Biking',
      },
      {
        id: '8D778629-F603-4C50-A121-6F4BB2FE2C4B',
        name: 'Road Biking',
      },
      {
        id: '071BA73C-1D3C-46D4-A53C-00D5602F7F0E',
        name: 'Boating',
      },
      {
        id: 'E0E4CE55-3119-46DE-86EB-6817CD8D5F30',
        name: 'Motorized Boating',
      },
      {
        id: 'BB0B8CD0-BF4C-4517-9980-CFE2D149C7B4',
        name: 'Sailing',
      },
      {
        id: 'A510F02B-8938-4679-A4F9-76580BCAE9C7',
        name: 'Boat Tour',
      },
      {
        id: 'A59947B7-3376-49B4-AD02-C0423E08C5F7',
        name: 'Camping',
      },
      {
        id: '907E8125-15E4-483C-8EAD-B9FA1E85C6F8',
        name: 'Canoe or Kayak Camping',
      },
      {
        id: '9159DF0F-951D-4AAE-9987-CEB3CE2A9ADA',
        name: 'Car or Front Country Camping',
      },
      {
        id: '7CFF5F03-5ECC-4F5A-8572-75D1F0976C0C',
        name: 'Group Camping',
      },
      {
        id: 'C5C5971C-E325-4CEB-8C81-EE49A881DF17',
        name: 'RV Camping',
      },
      {
        id: 'C11D3746-5063-4BD0-B245-7178D1AD866C',
        name: 'Compass and GPS',
      },
      {
        id: 'CA3641A0-FADC-497F-B036-3FE426D0DDCC',
        name: 'Geocaching',
      },
      {
        id: '89DA72D0-16D6-4C1C-89D4-103D94F1F63D',
        name: 'Orienteering',
      },
      {
        id: 'AE42B46C-E4B7-4889-A122-08FE180371AE',
        name: 'Fishing',
      },
      {
        id: '17411C8D-5769-4D0F-ABD1-52ED03840C18',
        name: 'Saltwater Fishing',
      },
      {
        id: '1DFACD97-1B9C-4F5A-80F2-05593604799E',
        name: 'Food',
      },
      {
        id: 'C6D3230A-2CEA-4AFE-BFF3-DC1E2C2C4BB4',
        name: 'Picnicking',
      },
      {
        id: 'B33DC9B6-0B7D-4322-BAD7-A13A34C584A3',
        name: 'Guided Tours',
      },
      {
        id: 'A0631906-9672-4583-91DE-113B93DB6B6E',
        name: 'Self-Guided Tours - Walking',
      },
      {
        id: 'C7D5A145-F8EB-4C37-9E92-2F6C6206B196',
        name: 'Self-Guided Tours - Auto',
      },
      {
        id: '42FD78B9-2B90-4AA9-BC43-F10E9FEA8B5A',
        name: 'Hands-On',
      },
      {
        id: '19A59EFB-DF4B-4049-9EE1-A784CAC9C70C',
        name: 'Arts and Crafts',
      },
      {
        id: 'BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA',
        name: 'Hiking',
      },
      {
        id: '45261C0A-00D8-4C27-A1F8-029F933A0D34',
        name: 'Front-Country Hiking',
      },
      {
        id: '4D224BCA-C127-408B-AC75-A51563C42411',
        name: 'Paddling',
      },
      {
        id: '21DB3AFC-8AAC-4665-BC1F-7198C0685983',
        name: 'Canoeing',
      },
      {
        id: '256543C7-4322-48B3-8978-765E89AA9431',
        name: 'Canoe or Kayak Camping',
      },
      {
        id: 'F353A9ED-4A08-456E-8DEC-E61974D0FEB6',
        name: 'Kayaking',
      },
      {
        id: 'B3EF12AF-D951-419E-BD3C-6B36CBCC1E16',
        name: 'Stand Up Paddleboarding',
      },
      {
        id: 'DF4A35E0-7983-4A3E-BC47-F37B872B0F25',
        name: 'Junior Ranger Program',
      },
      {
        id: '42CF4021-8524-428E-866A-D33097A4A764',
        name: 'SCUBA Diving',
      },
      {
        id: '3EBF7EAC-68FC-4754-B6A4-0C38A1583D45',
        name: 'Snorkeling',
      },
      {
        id: 'AE3C95F5-E05B-4A28-81DD-1C5FD4BE88E2',
        name: 'Surfing',
      },
      {
        id: '587BB2D3-EC35-41B2-B3F7-A39E2B088AEE',
        name: 'Swimming',
      },
      {
        id: 'C2801992-F34D-4974-A0F2-80FF04309EE4',
        name: 'Saltwater Swimming',
      },
      {
        id: '0B685688-3405-4E2A-ABBA-E3069492EC50',
        name: 'Wildlife Watching',
      },
      {
        id: '5A2C91D1-50EC-4B24-8BED-A2E11A1892DF',
        name: 'Birdwatching',
      },
    ],
    states: 'HI',
    images: [
      {
        credit: 'NPS Photo',
        title: 'Waiulaula Bay',
        altText: 'sandy beach',
        caption: 'Sandy beach after a storm',
        url: 'https://www.nps.gov/common/uploads/structured_data/3C86C7EB-1DD8-B71B-0BF2A10341617580.jpg',
      },
      {
        credit: 'NPS Photo/ Mandy Johnson-Campbell',
        title: 'Ancient ala hele trail, South Kohala',
        altText: 'An ancient ala hele foot trail curves through a lava field along an ocean cliff',
        caption:
          'A horizontal color photo of an ancient coastal trail meandering from the bottom right corner of the photo towards the top left. The gravel trail is lined with white coral rocks along its left side, and extends through a rough a’a lava field. To the right',
        url: 'https://www.nps.gov/common/uploads/structured_data/3145A461-D738-080A-6DBFF05B9E67ED76.jpg',
      },
      {
        credit: 'NPS Photo',
        title: 'On the historic Kiholo-Puako Trail',
        altText:
          'Trail stewards are greeted by the trail crew, who are performing traditional cultural protocol.',
        caption:
          'A group of people including men, women and children walk in a single file line away from the camera, on a wide, straight, historic trail that cuts through a rough ʻaʻa lava field. The trail appears as a light grey, against the darker lava lining it, the',
        url: 'https://www.nps.gov/common/uploads/structured_data/317D3E74-B539-A668-469F5AFB6CD52961.jpg',
      },
      {
        credit: 'NPS Photo',
        title: 'On the historic Kiholo-Puako Trail',
        altText:
          'Trail stewards are greeted by the trail crew, who are performing traditional cultural protocol.',
        caption:
          'A group of people including men, women and children walk in a single file line away from the camera, on a wide, straight, historic trail that cuts through a rough ʻaʻa lava field. The trail appears as a light grey, against the darker lava lining it, the',
        url: 'https://www.nps.gov/common/uploads/structured_data/317D3E74-B539-A668-469F5AFB6CD52961.jpg',
      },
      {
        credit: 'NPS Photo',
        title: 'On the historic Kiholo-Puako Trail',
        altText:
          'Trail stewards are greeted by the trail crew, who are performing traditional cultural protocol.',
        caption:
          'A group of people including men, women and children walk in a single file line away from the camera, on a wide, straight, historic trail that cuts through a rough ʻaʻa lava field. The trail appears as a light grey, against the darker lava lining it, the',
        url: 'https://www.nps.gov/common/uploads/structured_data/317D3E74-B539-A668-469F5AFB6CD52961.jpg',
      },
    ],
  },
  {
    id: 'C4E1A9A4-D121-4734-94FA-7788A93C2AAA',
    url: 'https://www.nps.gov/alag/index.htm',
    fullName: 'Alagnak Wild River',
    description:
      'The headwaters of Alagnak Wild River lie within the rugged Aleutian Range of neighboring Katmai National Park and Preserve. Meandering west towards Bristol Bay and the Bering Sea, the Alagnak traverses the beautiful Alaska Peninsula, providing an unparalleled opportunity to experience the unique wilderness, wildlife, and cultural heritage of southwest Alaska.',
    activities: [
      {
        id: '071BA73C-1D3C-46D4-A53C-00D5602F7F0E',
        name: 'Boating',
      },
      {
        id: 'A59947B7-3376-49B4-AD02-C0423E08C5F7',
        name: 'Camping',
      },
      {
        id: '4A58AF13-E8FB-4530-B41A-97DF0B0C77B7',
        name: 'Backcountry Camping',
      },
      {
        id: 'AE42B46C-E4B7-4889-A122-08FE180371AE',
        name: 'Fishing',
      },
      {
        id: '8386EEAF-985F-4DE8-9037-CCF91975AC94',
        name: 'Hunting and Gathering',
      },
      {
        id: '25559F45-F162-4B8B-BEC2-B341034A2AF4',
        name: 'Hunting',
      },
      {
        id: '4D224BCA-C127-408B-AC75-A51563C42411',
        name: 'Paddling',
      },
      {
        id: '256543C7-4322-48B3-8978-765E89AA9431',
        name: 'Canoe or Kayak Camping',
      },
      {
        id: 'F353A9ED-4A08-456E-8DEC-E61974D0FEB6',
        name: 'Kayaking',
      },
      {
        id: '75B92BEB-A36D-4064-88B7-92EEC6D17611',
        name: 'Whitewater Rafting',
      },
      {
        id: '0B685688-3405-4E2A-ABBA-E3069492EC50',
        name: 'Wildlife Watching',
      },
      {
        id: '5A2C91D1-50EC-4B24-8BED-A2E11A1892DF',
        name: 'Birdwatching',
      },
    ],
    states: 'AK',
    images: [
      {
        credit: 'NPS/R. Wood',
        title: 'salmon in Alagnak River',
        altText: 'underwater photo of salmon swimming in river',
        caption:
          'Each summer, hundreds of thousands of salmon return to the Alagnak watershed to spawn.',
        url: 'https://www.nps.gov/common/uploads/structured_data/3C7E810E-1DD8-B71B-0B92FDF31F5C0CA6.jpg',
      },
      {
        credit: 'NPS/R. Wood',
        title: 'Rafts along the river',
        altText: 'inflatable rafts on the edge of a river',
        caption: 'Rafting is a popular way to experience the river.',
        url: 'https://www.nps.gov/common/uploads/structured_data/3C7E8259-1DD8-B71B-0B45810F0CB6E02C.jpg',
      },
      {
        credit: 'NPS',
        title: 'Alagnak Wild River',
        altText: 'aerial view of braided Alagnak River',
        caption: "Alagnak River's lower reaches are extremely braided.",
        url: 'https://www.nps.gov/common/uploads/structured_data/3C7E8391-1DD8-B71B-0BB3E18B7F96110A.jpg',
      },
    ],
  },
  {
    id: '7D6098F9-3F75-4775-A56D-CD9C7F9A9488',
    url: 'https://www.nps.gov/anch/index.htm',
    fullName: 'Alaska Public Lands',
    description:
      'Alaska’s parks, forests, and refuges are rich and varied. The Alaska Public Lands Information Centers help visitors and residents to have meaningful, safe, enjoyable experiences on public lands, and encourages them to sustain the natural and cultural resources of Alaska. These centers provide trip-planning, interpretation, and education for all ages.',
    activities: [],
    states: 'AK',
    images: [
      {
        credit: 'NPS/Josh Spice',
        title: 'Hikers on Angel Rocks',
        altText:
          'Two Hikers stand on top of a very large granite boulder, looking out across the landscape',
        caption:
          'Hikers on top of Angel Rocks near Fairbanks look out across the landscape of Chena River State Recreation Area',
        url: 'https://www.nps.gov/common/uploads/structured_data/2595FA12-DF7A-1B6C-55D8F41ABCA2E011.jpg',
      },
      {
        credit: 'NPS',
        title: 'Anchorage APLIC',
        altText: 'Front of the Anchorage Federal Building, housing the Anchorage APLIC',
        caption: 'The Anchorage APLIC is located inside the Federal Building',
        url: 'https://www.nps.gov/common/uploads/structured_data/3C86397B-1DD8-B71B-0B8F02FE5D76B46D.jpg',
      },
      {
        credit: 'NPS/Josh Spice',
        title: 'Fairbanks APLIC',
        altText:
          'Fairbanks Alaska Public Lands Information Center, located inside the Morris Thompson Cultural & Visi',
        caption:
          'Fairbanks Alaska Public Lands Information Center, located inside the Morris Thompson Cultural & Visitors Center, in summer',
        url: 'https://www.nps.gov/common/uploads/structured_data/3C860F61-1DD8-B71B-0B4E7399BE80347C.jpg',
      },
    ],
  },
  {
    id: 'C08AD828-98FF-478E-A63C-614E7534274B',
    url: 'https://www.nps.gov/alca/index.htm',
    fullName: 'Alcatraz Island',
    description:
      "Alcatraz reveals stories of American incarceration, justice, and our common humanity. This small island was once a fort, a military prison, and a maximum security federal penitentiary. In 1969, the Indians of All Tribes occupied Alcatraz for 19 months in the name of freedom and Native American civil rights. We invite you to explore Alcatraz's complex history and natural beauty.",
    activities: [
      {
        id: '1DFACD97-1B9C-4F5A-80F2-05593604799E',
        name: 'Food',
      },
      {
        id: '0B685688-3405-4E2A-ABBA-E3069492EC50',
        name: 'Wildlife Watching',
      },
      {
        id: '5A2C91D1-50EC-4B24-8BED-A2E11A1892DF',
        name: 'Birdwatching',
      },
      {
        id: '24380E3F-AD9D-4E38-BF13-C8EEB21893E7',
        name: 'Shopping',
      },
      {
        id: '467DC8B8-0B7D-436D-A026-80A22358F615',
        name: 'Bookstore and Park Store',
      },
    ],
    states: 'CA',
    images: [
      {
        credit: 'NPS',
        title: 'Alcatraz Island',
        altText: 'View of the Alcatraz Lighthouse and Island from the water',
        caption: 'Alcatraz Island',
        url: 'https://www.nps.gov/common/uploads/structured_data/2514A14F-D5E3-BB31-4A0C4175BF61216A.jpg',
      },
      {
        credit: 'NPS / Dave Rauenbuehler',
        title: 'Alcatraz Cellhouse',
        altText:
          'A corridor extends between two rows and three tiers of cells. Skylights let in light from overhead.',
        caption: 'Looking down Broadway in the Alcatraz Cellhouse',
        url: 'https://www.nps.gov/common/uploads/structured_data/5482A294-DB42-56E0-FCCCD03C986AE1DC.jpg',
      },
      {
        credit: 'NPS Photo',
        title: 'Alcatraz Rangers and Firetruck',
        altText: 'Alcatraz Rangers and Firetruck',
        caption: 'Alcatraz Rangers and 1934 Diamond T Firetruck',
        url: 'https://www.nps.gov/common/uploads/structured_data/A5C1D012-1DD8-B71B-0BA00C730D46F141.jpg',
      },
      {
        credit: 'NPS Photo - Golden Gate National Recreation Area, GOGA 2316a',
        title: 'Army Prisoners in the Stockade, 1902',
        altText: 'Army Prisoners in the Stockade, 1902',
        caption: 'Army Prisoners in the Stockade, 1902',
        url: 'https://www.nps.gov/common/uploads/structured_data/A61F4F58-1DD8-B71B-0B981C552798242B.jpg',
      },
      {
        credit: 'Darlyne Sheppard Alcatraz Photo Collection',
        title: 'Serving the Christmas Meal, c 1951',
        altText: 'Cook serving Christmas dinner with menu posted above.',
        caption:
          'An inmate worker distributes trays near the steam table. Bars separate the kitchen from the mess hall.  The day’s menu, the Christmas meal, appears on a sign over his head. The menu includes consomme, stuffed celery, green olives and mixed sweet pickles,',
        url: 'https://www.nps.gov/common/uploads/structured_data/A64B4FF8-1DD8-B71B-0B63B232325C8081.jpg',
      },
    ],
  },
];

test.only('should render a list of clickable parks', () => {
  render(
    <MemoryRouter>
      <ParksList parks={parkResponse} />
    </MemoryRouter>
  );

  const clickableImage = screen.getAllByRole('img');
  userEvent.click(clickableImage[0]);
});
