<script lang="ts">
	export let data;
	const friends = data.friends;
</script>

<form method="POST" action="?/addFriend" class="flex flex-col gap-4 p-4 bg-slate-900">
	<input name="name" required />
	<input name="age" type="number" required />
	<input name="image" required />
	<input type="file" />
	<select name="interest" required>
		<option value="">Select interest</option>
		<option value="Music">Music</option>
		<option value="Sport">Sport</option>
		<option value="Burek">Burek</option>
	</select>
	<button type="submit" class="text-white bg-slate-500">Dodaj prijatelja</button>
</form>
<form method="POST" action="?/deleteFriend" class="flex flex-col gap-4 p-4 bg-slate-900">
	<select name="friendId" required>
		{#each friends as f}
			<option value={f.id}>{f.name}</option>
		{/each}
	</select>
	<button type="submit" class="text-white bg-slate-500">Izbriši prijatelja</button>
</form>

<div class="grid grid-cols-3 justify-between p-3 bg-black">
	<div class="bg-slate-600 p-3 rounded-sm m-2 text-white">
		<p>Name(Age) :</p>
	</div>
	<div class="bg-slate-600 p-3 rounded-sm m-2 text-white">
		<p>Interest :</p>
	</div>
	<div class="bg-slate-600 p-3 rounded-sm m-2 text-white">
		<p>Picture :</p>
	</div>
</div>

<div class="grid grid-cols-3 justify-between p-3 bg-black">
	{#each friends as f}
		<div class="bg-slate-800 p-1 rounded-sm m-2 text-white">
			<p>{f.name} ({f.age})</p>
		</div>
		<div class="bg-slate-800 p-1 rounded-sm m-2 text-white">
			<p>{f.interest}</p>
		</div>

		<div class="bg-slate-800 p-1 rounded-sm m-2 text-white">
			<img src={f.image} />
		</div>
	{/each}
</div>
