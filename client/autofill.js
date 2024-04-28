const fields = [
	{
		id: 'title',
		value: 'Job Title',
	},
	{
		id: 'description',
		value: 'A good job',
	},
	{
		id: 'location',
		value: 'Nashville, TN',
	},
	{
		id: 'title',
		value: 'Engineer',
	},
	{
		id: 'company',
		value: "Andrew's Code Factory",
	},
	{
		id: 'company_description',
		value: "Andrew's Code Factory",
	},
	{
		id: 'contact_email',
		value: 'sarah@gmail.com',
	},
	{
		id: 'contact_phone',
		value: '4101234567',
	},
];
fields.forEach((field) => {
	const fieldEl = document.getElementById(field.id);
	fieldEl.value = field.value;
});
// const submitBtn = document.getElementById('submitBtn');
// submitBtn.click();
