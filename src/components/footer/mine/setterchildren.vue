<template>
	
	<div>
		<ul class="setterchildren">
			
			<li>
				<mt-cell title="修改密码" is-link style="width:100%;">
					<img slot="icon" src="../../../../build/hong7.png" width="24" height="24">
				</mt-cell>
			</li>
			<li>
				<mt-cell title="退出登陆" is-link style="width:100%;">
					<img slot="icon" src="../../../../build/hong5.png" width="24" height="24">
				</mt-cell>
			</li><br/>
			
		</ul>
	</div>
	
</template>
<script>
import { Cell } from 'mint-ui';
export default{
	
}
</script>
<style lang="scss">
.zhanweifu{
	width:100%;
	background:#d9d9d9;
}
.setterchildren{
	background:#d9d9d9;
}
ul,li{ list-style: none;}

</style>