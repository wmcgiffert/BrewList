<script lang="ts">
  import { enhance } from '$app/forms';
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<h1>{data.boatName}</h1>


<form method="post" action="?/rename" use:enhance>
  <input  class="input input-bordered w-full max-w-xs" type="text" name="boatName">
  <button class=" btn" type="submit">Submit</button>
  <button class=" btn" formaction="?/capitalize">Capitalize</button>
  <button class=" btn" formaction="?/reset">Reset</button>
</form>

<a class="" href="/">Go to Homepage</a>
```