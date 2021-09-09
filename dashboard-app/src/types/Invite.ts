/*
•	Invitation Status
o	Sent
o	Accepted
o	Complete
•	PYI Status
o	Pending Review
o	Review - Verified
o	Review - Verification Failed
 */

export type Invite = {
  uid: string,
  salt: string,
  firstName: string,
  middleName: string,
  lastName: string,
  dobDay: number,
  dobMonth: number,
  dobYear: number,
  email: string,
  phone: string,
  role: string,
  odsCode: string,
  statusInvite: string,
  statusPYI: string,
  createdBy: string
}


