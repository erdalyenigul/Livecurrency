<template>
	<div class="currencysWrap">
		
		<div class="welcomeMsg">{{ message }}</div>
		<section class="container">
			<div class="curDate left-div">
				Son Güncelleme : {{ currencyAllData[0].lastUpdateDate }}
			</div>
			<div class="search-wrapper right-div">
				<input type="text" v-model="search" placeholder="Search title.."/>
				<label>Search title:</label>
			</div>
		</section>

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
				<ul v-bind:key="index" v-for="(item, index) in filteredList">
					<li class="curID">{{ index + 1 }}</li>
					<li>{{ item.code }}<span class="curName">{{ item.name }}</span></li>
					<li>{{ item.buyPrice.toFixed(4) }}</li>
					<li>{{ item.sellPrice.toFixed(4) }}</li>
					<li>{{ item.todayHighestSellPrice.toFixed(4) }}</li>
					<li>{{ item.todayLowestSellPrice.toFixed(4) }}</li>
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
				message : 'Canlı Borsa Bilgileri',
				search: ''
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
		},
		computed: {
			filteredList() {
				return this.currencyAllData.filter(x => {
					return x.name.toLowerCase().includes(this.search.toLowerCase()) ||
							x.code.toLowerCase().includes(this.search.toLowerCase())
				})
			}
		}
	}

</script>
