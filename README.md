# medimate
### By: sa, tomo, zer

Built based on MLH node starter kit

## Installation 

`npm install`

### Run

`npm start`

### API

/medicine/today
> To get today medicine

Request:
http://localhost:5000/medicine/today

Response:
[
{
"listID": 1,
"medicineName": "Medicine 1",
"intakeInterval": 3,
"dosage": "1 Pil",
"startDate": "2021-01-16T10:40:10.772Z",
"endDate": "2021-01-29T17:00:00.000Z"
},
{
"listID": 17,
"medicineName": "ganti nama 123",
"intakeInterval": 5,
"dosage": "5 Pil",
"startDate": "2020-08-15T10:00:00.000Z",
"endDate": "2021-05-31T10:00:00.000Z"
}
]

/medicine/add
> To add medicine

Request:
/medicine/add
{
	"medicine_name": "ganti nama 123",
  "intake_interval": 5,
  "dosage": "5 Pil",
  "start_date": "2020-08-15T10:00:00.000Z",
  "end_date": "2021-05-31T10:00:00.000Z"
}

Response:
{
    "medicineName": "ganti nama 123",
    "intakeInterval": 5,
    "dosage": "5 Pil",
    "startDate": "2020-08-15T03:00:00.000Z",
    "endDate": "2021-05-31T03:00:00.000Z",
    "listID": 21
}

/medicine/delete

Request:
/medicine/delete
{
	"list_id":19
}

Response:
Success in delete record

/medicine/update

Request:
/medicine/update
{
	"list_id": 17,
	"medicine_name": "ganti nama 123",
	"intake_interval": 5,
	"dosage": "5 Pil",
	"start_date": "2020-08-15T17:00:00.000Z",
"end_date": "2021-05-31T17:00:00.000Z"
}

Response:
Success in update record
