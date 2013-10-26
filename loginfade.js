$(document).ready(function(){
				
					$('#login_button').click(function(e){
						e.stopPropagation()
						$('#login_cont').fadeIn();
					});
					
					$('#login_cont').click(function(e){
						e.stopPropagation()
					});
					
					$(document).click(function(e){
						$('#login_cont').fadeOut();
					});			
				});
					