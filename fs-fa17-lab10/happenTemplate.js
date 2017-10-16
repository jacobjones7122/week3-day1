var library = (function() {
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var monthAbbrevs = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	function doubleDigit(value) {
		if ((value) < 10) {
			value = '0' + (value.toString()); 
		} else {
			value.toString();
		};
		return value.toString();
    }

	function getOrdinal(value) {
		if (parseInt(value)[0] == 1) {
			value = (value + 'st');
		} else if (parseInt(value)[0] == 2) {
			value = (value + 'nd');
		} else {
			value = (value + 'th');
		};
		return value;
	}

    return {
	TimeStamp: (function(){
   	  return {
		UnixTimestamp: function(){
			let unix = Date.now();
			console.log(unix);
			unix = Math.floor(unix / 1000);
			return unix.toString();
		},
		UnixMillisecond: function(){
			return Date.now();
		}
	  }
	})(),
	Local: (function(){
	  return {
		Time: (function() {
		  return {
	  	    WithSeconds: function(){
				let date = new Date;
				var h = date.getHours();
				console.log(h);
				if (h > 12) {
					h = h - 12;
				} else {
					h = h;
				};
				h.toString();
				let m = doubleDigit(date.getMinutes()).toString();
				let h1 = date.getHours();
				let uppercase = 'PM';
				if (h1 > 12) {
					let uppercase = 'AM';
				} 
				let s = doubleDigit(date.getSeconds()).toString();
				return (h + ':' + m + ':' + s + ' ' + uppercase).toString();
				},
			  
	   	    WithOutSeconds: function() {
				let date = new Date;
				var h = date.getHours();
				console.log(h);
				if (h > 12) {
					h = h - 12;
				} else {
					h = h;
				};
				h.toString();
				let m = doubleDigit(date.getMinutes()).toString();
				let h1 = date.getHours();
				let uppercase = 'PM';
				if (h1 > 12) {
					let uppercase = 'AM';
				} 
				return (h + ':' + m + ' ' + uppercase).toString();

			   }
		  }
		})(),
		MDY: (function(){
	  	  return {
		    Numeral: function(){
				let date = new Date();
				let a = (date.getMonth() + 1);
				let d = date.getDate();
				let y = date.getFullYear();
				return (a.toString() + '/' + d.toString() + '/' + y.toString());
			},
			Name: function(){
				let date = new Date();
				let a = date.getMonth();
				let month = months[a];
				let d = date.getDate();
				let y = date.getFullYear();
				return (month + ' ' + d + ', ' + y).toString();
			}
		  }
		  })(),
		}
	})(),
	Second: (function(){
		return{
			Second: function(){
				let date = new Date();
				let s = date.getSeconds();
				return s.toString();
			},
			DblDigit: function(){
				return doubleDigit(this.Second());
			}
		}
	})(),
	Minute: (function(){
		return{
			Minute: function(){
				let date = new Date();
				let m = date.getMinutes();
				return m.toString();
			},
			DblDigit: function(){
				return doubleDigit(this.Minute());
			}
		}
	})(),
	Hour: (function(){
		return {
			TwentyFourHour: function() {
				let date = new Date;
				var h = date.getHours();
				return h.toString();
			},
			TwelveHour: function() {
				let date = new Date;
				var h = date.getHours();
				console.log(h);
				if (h > 12) {
					h = h - 12;
				} else {
					h = h;
				}
				return h.toString();
			},
			AMPM: (function() {
				let date = new Date();
	
				
				return {
					UpperCase: function(){
						let date = new Date();
						let h = date.getHours();
						let uppercase = 'PM';
						if (h > 12) {
							let uppercase = 'AM';
						} 
						return uppercase;
					},
					LowerCase: function(){
						let date = new Date();
						let h = date.getHours();
						let lowercase = 'pm';
						if (h > 12) {
							let lowercase = 'am';
						} 
						return lowercase;
					}
				}
			})()
		}
	})(),
	Week: (function(){
		return {
			DayOfWeek: function(){
				let date = new Date();
				let a = date.getDay();
				return days[a];
			},
			AbrDayOfWeek: function(){
				return this.DayOfWeek().slice(0, 3);
			},
			FirstTwoOfWeek: function(){
				let date = new Date();
				let a = date.getDay();
				return (days[a]).slice(0, 2);
			},
			WeekOfYear: function(){
				let now = new Date();
				let start = new Date(now.getFullYear(), 0, 0);
				let diff = now - start;
				let oneWeek = 1000 * 60 * 60 * 24 * 7;
				let week = Math.floor(diff / oneWeek);
				week = week + 1;
				return week.toString();
			}				
		}
	})(),
	Month: (function(){
		return {
			DateOfMonth: (function(){
				return {
					Numeral: function(){
						let date = new Date();
						return date.getDate().toString();
					},
					Ordinal: function(){
						return getOrdinal(this.Numeral());
					},
					DateDblDigit: function(){
						return doubleDigit(this.Numeral());
					}
				}
			})(),
			MonthNumber: function(){
				let date = new Date();
				return (date.getMonth() + 1).toString();
			},
			MonthNumberDblDigit: function(){
				return doubleDigit(this.MonthNumber());
			},
			AbrOfCurrentMonth: function(){
				let a = parseInt(this.MonthNumber()) - 1;
				return monthAbbrevs[a];
			},
			CurrentMonth: function(){
				let a = parseInt(this.MonthNumber()) - 1;
				return months[a];
			}
		}
	})(),
	Year: (function(){
		return {
			DayOfYear: (function(){
				return {
					Numeral: function(){
						let now = new Date();
						let start = new Date(now.getFullYear(), 0, 0);
						let diff = now - start;
						let oneDay = 1000 * 60 * 60 * 24;
						let day = Math.floor(diff / oneDay);
						console.log(day);
						return day.toString();
					},
					Ordinal: function(){
						let now = new Date();
						let start = new Date(now.getFullYear(), 0, 0);
						let diff = now - start;
						let oneDay = 1000 * 60 * 60 * 24;
						let day = Math.floor(diff / oneDay);
						console.log(day);
						return getOrdinal(day).toString();}
				}
			})(),
			YearFull: function(){
			let date = new Date();
			return date.getFullYear().toString();
			},
			YearAbr: function(){
				let date = new Date();
				let year = (date.getFullYear()).toString();
				return year.slice(2, 4);
			}
		}
	})(),
	Defaults: function(){
		let date = new Date();
		let y = date.getFullYear().toString();
		let m = doubleDigit(date.getMonth() + 1).toString();
		let d = doubleDigit(date.getDate()).toString();
		let h = doubleDigit(date.getHours()).toString();
		let min = doubleDigit(date.getMinutes()).toString();
		let s = doubleDigit(date.getSeconds()).toString();

		return (y + '-' + m + '-' + d + 'T' + h + ':' + min + ':' + s).toString();
	}
  }
})();