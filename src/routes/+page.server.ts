import db from '$lib/db';
export const actions = {
	addFriend: async (event) => {
		const form = await event.request.formData();
		const name = form.get('name');
		const age = form.get('age');
		const interest = form.get('interest');
		const image = form.get('image');

		await db.friend.create({
			data: {
				name: name,
				age: parseInt(age),
				interest: interest,
				image: image
			}
		});
	},
	deleteFriend: async (event) => {
		const form = await event.request.formData();
		const fId = form.get('friendId');

		await db.friend.delete({
			where: { id: parseInt(fId) }
		});
	}
};

export async function load() {
	const friends = await db.friend.findMany();
	return { friends: friends };
}
