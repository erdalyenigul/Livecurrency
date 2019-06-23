<template>
	<div class="currencysWrap">
		
		<div class="welcomeMsg">{{ message }}</div>
		<div class="curDate">Son Güncelleme : {{ currencyAllData[0].lastUpdateDate }}</div>
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
				<ul v-for="item in dataLenght">
					<li class="curID">{{ i+1 }}</li>
					<li>{{ currencyAllData[i].code }}<span class="curName">{{ currencyAllData[i].name }}</span></li>
					<li>{{ currencyAllData[i].buyPrice.toFixed(4) }}</li>
					<li>{{ currencyAllData[i].sellPrice.toFixed(4) }}</li>
					<li>{{ currencyAllData[i].todayHighestSellPrice.toFixed(4) }}</li>					
					<li>{{ currencyAllData[i].todayLowestSellPrice.toFixed(4) }}</li>	
					<li class="curIncrease">{{ i++ }}</li>
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
				currencyAllData : '',
				dataLenght : '',
				i : 0,
				message : 'Canlı Borsa Bilgileri'
			}
		},
		methods : {
			dataRequest: function() {		
				var self = this;
				axios.get('https://api.canlidoviz.com/web/items?marketId=1&type=0')
				.then(response => {
					self.currencyAllData = response.data;
					self.dataLenght = response.data.length;
				});				
			},
			dataRequestAuto: function() {
				setInterval(() => {
					this.dataRequest();
				}, 60000)
			},
			increaseItem() {
				i++;
				console.log(i)
			}
		},
		mounted() {
			this.dataRequest();
			this.dataRequestAuto();
		}
	}

</script>
