<template>
	<div class="currencysWrap">
		
		<div class="welcomeMsg">{{ message }}</div>
		<div class="curDate">Son Güncelleme : {{ goldAllData[0].lastUpdateDate }}</div>
		<div class="curTable">
			<div class="curHead">
				<ul>
					<li class="curID">ID</li>
					<li>Döviz</li>
					<li>Alış</li>
					<li>Satış</li>
					<li>En Yüksek</li>
					<li>En Düşük</li>
				</ul>
			</div>
			<div class="curBody">
				<ul v-for="item in dataGoldLenght">
					<li class="curID">{{ g+1 }}</li>
					<li>{{ goldAllData[g].name }}</li>
					<li>{{ goldAllData[g].buyPrice.toFixed(2) }}</li>
					<li>{{ goldAllData[g].sellPrice.toFixed(2) }}</li>
					<li>{{ goldAllData[g].todayHighestSellPrice.toFixed(2) }}</li>					
					<li>{{ goldAllData[g].todayLowestSellPrice.toFixed(2) }}</li>	
					<li class="curIncrease">{{ g++ }}</li>
				</ul>
			</div>
		</div>	    
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
		data() {
			return {
				goldAllData : '',
				dataGoldLenght : '',
				g : 0,
				message : 'Canlı Altın Bilgileri '
			}
		},
		methods : {
			dataRequestGold: function() {		
				var self = this;
				axios.get('https://api.canlidoviz.com/web/items?marketId=1&type=1')
				.then(response => {
					self.goldAllData = response.data;
					self.dataGoldLenght = response.data.length;
					console.log(dataGoldLenght)
				});				
			},
			dataRequestAutoGold: function() {
				setInterval(() => {
					this.dataRequestGold();
				}, 60000)
			},
			increaseItem() {
				g++;
				console.log(i)
			}
		},
		mounted() {
			this.dataRequestGold();
			this.dataRequestAutoGold();
		}
	}

</script>