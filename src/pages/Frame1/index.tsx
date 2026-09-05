import React, {useState} from "react";
export default (props) => {
	const [input1, onChangeInput1] = useState('');
	const [input2, onChangeInput2] = useState('');
	const [input3, onChangeInput3] = useState('');
	const [input4, onChangeInput4] = useState('');
	return (
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-white overflow-hidden">
				<div className="self-stretch bg-[#EFEFEF]">
					<div className="flex items-center self-stretch bg-[#CDDDFC] relative border border-solid border-[#5D88FF]">
						<div className="w-[341px] h-20 mr-[50px]">
						</div>
						<div className="flex flex-col shrink-0 items-start self-stretch bg-[#CDDDFC] absolute top-0 bottom-0 left-0 py-3 pl-[87px] pr-11 border border-solid border-[#5D88FF]">
							<div className="flex flex-col items-center relative">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/ic2knq7j_expires_30_days.png"} 
									className="w-[107px] h-[71px] absolute bottom-[-6px] left-[-87px] object-fill"
								/>
								<div className="flex flex-col items-start gap-3">
									<span className="text-black text-[40px] font-bold" >
										AlertGuard
									</span>
									<span className="text-[#05001F] text-sm mr-[31px]" >
										Intelligent Alert Noise Filter
									</span>
								</div>
							</div>
						</div>
						<div className="flex flex-col shrink-0 items-start gap-[9px]">
							<span className="text-black text-[32px] ml-[1px] mr-[146px]" >
								Dashboard
							</span>
							<span className="text-black text-sm" >
								Real time overview of your alerts and incidents
							</span>
						</div>
						<div className="flex-1 self-stretch">
						</div>
						<button className="flex shrink-0 items-center bg-white text-left py-2.5 px-4 mr-[45px] gap-[15px] rounded-[10px] border-0"
							onClick={()=>alert("Pressed!")}>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/5z728qm5_expires_30_days.png"} 
								className="w-[19px] h-[18px] object-fill"
							/>
							<span className="text-[#05001F] text-[13px]" >
								August 20, 2026 | 9:30 AM
							</span>
						</button>
						<div className="flex justify-between items-center bg-white w-[198px] py-[1px] rounded-[10px]">
							<div className="flex flex-col items-start w-[66px] ml-[19px] gap-[7px]">
								<span className="text-[#141313] text-[13px]" >
									Team User
								</span>
								<div className="flex items-center self-stretch gap-1">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/wv325zli_expires_30_days.png"} 
										className="w-[11px] h-[11px] object-fill"
									/>
									<span className="text-[#37C81A] text-[13px]" >
										Online
									</span>
								</div>
							</div>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/orkolh3y_expires_30_days.png"} 
								className="w-12 h-[47px] mr-2 object-fill"
							/>
						</div>
					</div>
					<div className="flex items-center self-stretch mr-[55px] gap-[22px]">
						<div className="bg-[#EDF3FF] w-[332px] pt-[30px] px-[15px]">
							<div className="flex items-center self-stretch bg-white mb-[30px] rounded-[10px]">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/5fasitec_expires_30_days.png"} 
									className="w-[25px] h-6 ml-[21px] mr-[15px] rounded-[10px] object-fill"
								/>
								<input
									placeholder="Dashboard"
									value={input1}
									onChange={(event)=>onChangeInput1(event.target.value)}
									className="flex-1 self-stretch text-[#5D88FF] bg-transparent text-2xl py-[18px] mr-1 border-0"
								/>
							</div>
							<div className="flex items-center self-stretch bg-white mb-[30px] rounded-[10px]">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/tbhjzj9v_expires_30_days.png"} 
									className="w-[31px] h-[29px] ml-[21px] mr-[13px] rounded-[10px] object-fill"
								/>
								<input
									placeholder="Incidents"
									value={input2}
									onChange={(event)=>onChangeInput2(event.target.value)}
									className="flex-1 self-stretch text-[#5D88FF] bg-transparent text-2xl py-[18px] mr-1 border-0"
								/>
							</div>
							<div className="flex items-center self-stretch bg-white mb-[30px] rounded-[10px]">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/6bg1twfw_expires_30_days.png"} 
									className="w-7 h-[27px] ml-[26px] mr-[9px] rounded-[10px] object-fill"
								/>
								<input
									placeholder="Analytics"
									value={input3}
									onChange={(event)=>onChangeInput3(event.target.value)}
									className="flex-1 self-stretch text-[#5D88FF] bg-transparent text-2xl py-4 mr-1 border-0"
								/>
							</div>
							<div className="flex items-center self-stretch bg-white mb-[701px] rounded-[10px]">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/rbhgqf3q_expires_30_days.png"} 
									className="w-7 h-7 ml-[22px] mr-3.5 rounded-[10px] object-fill"
								/>
								<input
									placeholder="Settings"
									value={input4}
									onChange={(event)=>onChangeInput4(event.target.value)}
									className="flex-1 self-stretch text-[#5D88FF] bg-transparent text-2xl py-[15px] mr-1 border-0"
								/>
							</div>
						</div>
						<div className="flex-1">
							<div className="flex items-center self-stretch mb-[26px]">
								<div className="flex flex-1 flex-col items-center bg-white py-6 mr-[15px] gap-1 rounded-[10px]">
									<div className="flex items-start self-stretch mx-[21px]">
										<button className="flex flex-col shrink-0 items-start bg-[#CDDDFC] text-left py-[15px] px-[18px] mr-[21px] rounded-[10px] border-0"
											onClick={()=>alert("Pressed!")}>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/trfemnz1_expires_30_days.png"} 
												className="w-8 h-[38px] object-fill"
											/>
										</button>
										<div className="flex flex-1 flex-col items-start mt-1.5 mr-[41px] gap-[18px]">
											<span className="text-[#100F0F] text-[13px] font-bold" >
												Alerts Received
											</span>
											<span className="text-[#141313] text-2xl font-bold" >
												500
											</span>
										</div>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/j1zekmdf_expires_30_days.png"} 
											className="w-[53px] h-7 mt-[31px] object-fill"
										/>
									</div>
									<span className="text-[#37C81A] text-[11px]" >
										12% from last hour
									</span>
								</div>
								<div className="flex flex-1 flex-col items-start bg-white py-6 mr-3.5 gap-1 rounded-[10px]">
									<div className="flex items-start self-stretch ml-[25px] mr-[13px]">
										<button className="flex flex-col shrink-0 items-start bg-[#CAEBC3] text-left py-[13px] px-3 mr-[21px] rounded-[10px] border-0"
											onClick={()=>alert("Pressed!")}>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/5i59v910_expires_30_days.png"} 
												className="w-11 h-[42px] object-fill"
											/>
										</button>
										<div className="flex flex-1 flex-col items-start mt-[7px] mr-6 gap-4">
											<span className="text-[#100F0F] text-[13px] font-bold" >
												Alerts Suppressed
											</span>
											<span className="text-[#141313] text-2xl font-bold" >
												492
											</span>
										</div>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/ruqm7f85_expires_30_days.png"} 
											className="w-[53px] h-7 mt-[31px] object-fill"
										/>
									</div>
									<span className="text-[#37C81A] text-[11px] ml-[130px]" >
										14% from last hour
									</span>
								</div>
								<div className="flex flex-1 flex-col items-center bg-white py-6 mr-[15px] gap-1 rounded-[10px]">
									<div className="flex items-start self-stretch mx-[21px]">
										<button className="flex flex-col shrink-0 items-start bg-[#F6DECA] text-left py-[15px] px-2.5 mr-[21px] rounded-[10px] border-0"
											onClick={()=>alert("Pressed!")}>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/zd6pjund_expires_30_days.png"} 
												className="w-[46px] h-[38px] object-fill"
											/>
										</button>
										<div className="flex flex-1 flex-col items-start mt-1.5 mr-[39px] gap-[18px]">
											<span className="text-[#100F0F] text-[13px] font-bold" >
												Active Incidents
											</span>
											<span className="text-[#141313] text-2xl font-bold" >
												8
											</span>
										</div>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/533dadq9_expires_30_days.png"} 
											className="w-[53px] h-7 mt-[31px] object-fill"
										/>
									</div>
									<span className="text-[#F44949] text-[11px]" >
										20% from last hour
									</span>
								</div>
								<div className="flex flex-1 flex-col items-start bg-white py-6 gap-1 rounded-[10px]">
									<div className="flex items-start self-stretch ml-[25px] mr-[13px]">
										<button className="flex flex-col shrink-0 items-start bg-[#E5D2FF] text-left py-[13px] px-3.5 mr-[21px] rounded-[10px] border-0"
											onClick={()=>alert("Pressed!")}>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/pp263s8g_expires_30_days.png"} 
												className="w-[39px] h-[42px] object-fill"
											/>
										</button>
										<div className="flex flex-1 flex-col items-start mt-1.5 mr-[37px] gap-[18px]">
											<span className="text-[#100F0F] text-[13px] font-bold" >
												Noise Reduction
											</span>
											<span className="text-[#141313] text-2xl font-bold" >
												98.4
											</span>
										</div>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/dtmcq2mu_expires_30_days.png"} 
											className="w-[53px] h-7 mt-[31px] object-fill"
										/>
									</div>
									<span className="text-[#37C81A] text-[11px] ml-[130px]" >
										2.1% from last hour
									</span>
								</div>
							</div>
							<div className="flex items-center self-stretch mb-4 mx-[3px]">
								<div className="flex flex-1 flex-col items-start bg-white pt-2 mr-[71px] rounded-[10px]">
									<div className="flex items-start self-stretch mb-[11px] mx-[25px]">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/yufz4trk_expires_30_days.png"} 
											className="w-8 h-[25px] mt-3.5 mr-3 object-fill"
										/>
										<span className="text-[#141313] text-base font-bold mt-[17px]" >
											Alert Activity
										</span>
										<div className="flex-1 self-stretch">
										</div>
										<div className="flex shrink-0 items-center bg-[#CDDDFCB8] py-[3px] px-[7px] rounded-[10px]">
											<button className="flex flex-col shrink-0 items-start bg-[#5D88FF] text-left py-3 px-[17px] mr-[13px] rounded-[10px] border-0"
												onClick={()=>alert("Pressed!")}>
												<span className="text-white text-xs" >
													Last 1 Hour
												</span>
											</button>
											<button className="flex flex-col shrink-0 items-start bg-white text-left py-3 px-[15px] mr-2.5 rounded-[10px] border-0"
												onClick={()=>alert("Pressed!")}>
												<span className="text-[#141313] text-xs" >
													Last 6 Hours
												</span>
											</button>
											<button className="flex flex-col shrink-0 items-start bg-white text-left py-3 px-[11px] rounded-[10px] border-0"
												onClick={()=>alert("Pressed!")}>
												<span className="text-[#141313] text-xs" >
													Last 24 Hours
												</span>
											</button>
										</div>
									</div>
									<div className="flex flex-col items-end self-stretch mb-[26px]">
										<div className="flex items-center mr-11">
											<div className="bg-[#C70A0A] w-[27px] h-2 mr-[9px] rounded-[10px]">
											</div>
											<span className="text-[#141313] text-[10px] mr-[67px]" >
												Incoming Alerts
											</span>
											<div className="bg-[#2CA014] w-[27px] h-2 mr-[9px] rounded-[10px]">
											</div>
											<span className="text-[#141313] text-[10px]" >
												Processed Alerts
											</span>
										</div>
									</div>
									<div className="flex items-center self-stretch mb-[9px] mx-[22px] gap-[18px]">
										<span className="text-[#141313] text-[10px]" >
											500
										</span>
										<div className="flex-1 bg-[#D5CECE] h-0.5">
										</div>
									</div>
									<div className="flex items-start self-stretch relative mb-[21px] mx-[22px]">
										<div className="flex flex-col shrink-0 items-start mt-[18px] mr-[18px] gap-[27px]">
											<span className="text-[#141313] text-[10px]" >
												400
											</span>
											<span className="text-[#141313] text-[10px]" >
												300
											</span>
											<span className="text-[#141313] text-[10px]" >
												200
											</span>
											<span className="text-[#141313] text-[10px]" >
												100
											</span>
											<span className="text-[#141313] text-[10px] mr-3" >
												0
											</span>
										</div>
										<div className="flex-1">
											<div className="flex flex-col items-start self-stretch relative mx-[1px]">
												<div className="self-stretch bg-[#D3CFCF] h-[1px] absolute top-[23px] right-0 left-0">
												</div>
												<div className="self-stretch bg-[#D3CFCF] h-[1px] absolute top-[58px] right-0 left-0">
												</div>
												<div className="self-stretch bg-[#D5CECE] h-[1px] absolute bottom-[68px] right-0 left-0">
												</div>
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/4re93oej_expires_30_days.png"} 
													className="w-[638px] h-[163px] object-fill"
												/>
											</div>
											<div className="self-stretch bg-[#D5CECE] h-[1px]">
											</div>
										</div>
										<div className="bg-[#D3CFCF] w-[635px] h-[1px] absolute bottom-[34px] right-[3px]">
										</div>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/xvzzo7ho_expires_30_days.png"} 
											className="w-[634px] h-[71px] absolute bottom-[1px] right-1 object-fill"
										/>
									</div>
									<div className="flex items-center mb-9 ml-[43px]">
										<span className="text-[#141313] text-[10px] mr-[66px]" >
											10:00
										</span>
										<span className="text-[#141313] text-[10px] mr-[77px]" >
											10:10
										</span>
										<span className="text-[#141313] text-[10px] mr-[76px]" >
											10:20
										</span>
										<span className="text-[#141313] text-[10px] mr-[75px]" >
											10:30
										</span>
										<span className="text-[#141313] text-[10px] mr-[74px]" >
											10:40
										</span>
										<span className="text-[#141313] text-[10px] mr-[79px]" >
											10:50
										</span>
										<span className="text-[#141313] text-[10px]" >
											11:00
										</span>
									</div>
								</div>
								<div className="flex flex-col items-start bg-white w-[522px] pt-[34px] pl-[35px] pr-[15px] rounded-[10px]">
									<span className="text-[#100F0F] text-2xl font-bold mb-8" >
										Top Alert Categories
									</span>
									<div className="flex items-start self-stretch mb-[58px]">
										<div className="flex flex-col shrink-0 items-center bg-cover bg-center py-[83px] px-[68px] mr-8 gap-[9px]">
											<span className="text-[#100F0F] text-4xl font-bold" >
												500
											</span>
											<span className="text-[#100F0F] text-sm font-bold" >
												Total Alerts
											</span>
										</div>
										<div className="flex flex-col shrink-0 items-center mt-[31px] mr-2 gap-[30px]">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/l3htmiie_expires_30_days.png"} 
												className="w-[11px] h-2.5 object-fill"
											/>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/pwwxdhdr_expires_30_days.png"} 
												className="w-[11px] h-2.5 object-fill"
											/>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/m9eeqpzs_expires_30_days.png"} 
												className="w-[11px] h-2.5 object-fill"
											/>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/orfhw5is_expires_30_days.png"} 
												className="w-[11px] h-2.5 object-fill"
											/>
										</div>
										<div className="flex flex-col shrink-0 items-start mt-[31px]">
											<span className="text-[#141313] text-xs font-bold mb-[31px]" >
												Database Connection    48%(240)
											</span>
											<span className="text-[#141313] text-xs font-bold mb-[27px]" >
												CPU Usage High              24%(120)
											</span>
											<span className="text-[#141313] text-xs font-bold mb-[29px] mr-[11px]" >
												API Timeout                      17%(85)
											</span>
											<span className="text-[#141313] text-xs font-bold mr-[15px]" >
												Authentication                11%(55)
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="flex items-center self-stretch mb-5 mx-[3px] gap-5">
								<div className="flex flex-1 flex-col bg-white py-[22px] gap-4 rounded-[10px] border border-solid border-[#5D88FF]">
									<div className="flex items-center self-stretch mx-8">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/bipb4sbm_expires_30_days.png"} 
											className="w-5 h-[27px] mr-4 object-fill"
										/>
										<span className="text-[#171616] text-[15px] font-bold" >
											Recent Alerts
										</span>
										<div className="flex-1 self-stretch">
										</div>
										<span className="text-[#5D88FF] text-[13px] font-bold" >
											View all
										</span>
									</div>
									<div className="flex flex-col items-start self-stretch bg-[#EDF3FF] pt-[9px] mx-[17px] rounded-[10px]">
										<div className="flex items-center mb-3 ml-4">
											<span className="text-[#100F0F] text-xs mr-[93px]" >
												Severity
											</span>
											<span className="text-[#100F0F] text-xs mr-[165px]" >
												Alert Message
											</span>
											<span className="text-[#100F0F] text-xs mr-[97px]" >
												Service
											</span>
											<span className="text-[#100F0F] text-xs" >
												Time
											</span>
										</div>
										<div className="self-stretch bg-[#B090912E] h-[1px] mb-1.5">
										</div>
										<div className="flex items-center mb-1.5 ml-2">
											<div className="flex shrink-0 items-center bg-[#FFBFBFB8] p-[7px] mr-[54px] gap-[7px] rounded-[10px]">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/wg42jych_expires_30_days.png"} 
													className="w-[9px] h-[9px] object-fill"
												/>
												<span className="text-[#C70A0A] text-xs" >
													Critical
												</span>
											</div>
											<span className="text-[#141313] text-xs mr-[77px]" >
												Database connection failed
											</span>
											<span className="text-[#141313] text-xs mr-[59px]" >
												Payment Service
											</span>
											<span className="text-[#141313] text-xs" >
												10:32 AM
											</span>
										</div>
										<div className="self-stretch bg-[#B090912E] h-[1px] mb-[5px]">
										</div>
										<div className="flex items-center mb-[7px] ml-2">
											<div className="flex shrink-0 items-center bg-[#F7C9A3B8] p-[7px] mr-[71px] gap-[7px] rounded-[10px]">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/dstwn1y8_expires_30_days.png"} 
													className="w-[9px] h-[9px] object-fill"
												/>
												<span className="text-[#FF9D4C] text-xs" >
													High
												</span>
											</div>
											<span className="text-[#141313] text-xs mr-[141px]" >
												CPU usage high
											</span>
											<span className="text-[#141313] text-xs mr-[72px]" >
												Server Cluster
											</span>
											<span className="text-[#141313] text-xs" >
												10:31 AM
											</span>
										</div>
										<div className="self-stretch bg-[#B090912E] h-[1px] mb-[5px]">
										</div>
										<div className="flex items-center mb-[7px] ml-2">
											<div className="flex shrink-0 items-center bg-[#F8E9A3B8] p-[7px] mr-[53px] gap-1.5 rounded-[10px]">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/4zobrnx2_expires_30_days.png"} 
													className="w-[9px] h-[9px] object-fill"
												/>
												<span className="text-[#A38605] text-xs" >
													Medium
												</span>
											</div>
											<span className="text-[#141313] text-xs mr-[118px]" >
												API request timeout
											</span>
											<span className="text-[#141313] text-xs mr-[82px]" >
												API Gateway
											</span>
											<span className="text-[#141313] text-xs" >
												10:30 AM
											</span>
										</div>
										<div className="self-stretch bg-[#B090912E] h-[1px] mb-[5px]">
										</div>
										<div className="flex items-center mb-[7px] ml-2">
											<div className="flex shrink-0 items-center bg-[#CDDDFCB8] p-[7px] mr-20 gap-[5px] rounded-[10px]">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/uqtozbt9_expires_30_days.png"} 
													className="w-[9px] h-[9px] object-fill"
												/>
												<span className="text-[#5D88FF] text-xs" >
													Low
												</span>
											</div>
											<span className="text-[#141313] text-xs mr-[109px]" >
												Authentication failure
											</span>
											<span className="text-[#141313] text-xs mr-[82px]" >
												Auth Service
											</span>
											<span className="text-[#141313] text-xs" >
												10:29 AM
											</span>
										</div>
										<div className="self-stretch bg-[#B090912E] h-[1px] mb-[5px]">
										</div>
										<div className="flex items-center mb-1.5 ml-2">
											<div className="flex shrink-0 items-center bg-[#F7C9A3B8] p-[7px] mr-[71px] gap-1.5 rounded-[10px]">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/b043zhr9_expires_30_days.png"} 
													className="w-[9px] h-[9px] object-fill"
												/>
												<span className="text-[#FF9D4C] text-xs" >
													High
												</span>
											</div>
											<span className="text-[#141313] text-xs mr-[119px]" >
												Memory usage high
											</span>
											<span className="text-[#141313] text-xs mr-[82px]" >
												User Service
											</span>
											<span className="text-[#141313] text-xs" >
												10:28 AM
											</span>
										</div>
										<div className="self-stretch bg-[#B090912E] h-[1px]">
										</div>
									</div>
								</div>
								<div className="flex flex-1 flex-col bg-white py-[17px] gap-[19px] rounded-[10px] border border-solid border-[#5D88FF]">
									<div className="flex items-start self-stretch ml-[19px] mr-[33px]">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/3br2vx1q_expires_30_days.png"} 
											className="w-[34px] h-[33px] mr-3 object-fill"
										/>
										<span className="text-[#171616] text-[15px] font-bold" >
											Active Incidents
										</span>
										<div className="flex-1 self-stretch">
										</div>
										<span className="text-[#5D88FF] text-[13px] font-bold" >
											View all
										</span>
									</div>
									<div className="self-stretch bg-[#EDF3FF] py-[9px] mx-[7px] rounded-[10px]">
										<div className="flex items-center self-stretch mb-[19px] ml-4 mr-7">
											<span className="text-[#100F0F] text-xs mr-[82px]" >
												Severity
											</span>
											<span className="text-[#100F0F] text-xs" >
												Title
											</span>
											<div className="flex-1 self-stretch">
											</div>
											<span className="text-[#100F0F] text-xs mr-[94px]" >
												Incident ID
											</span>
											<span className="text-[#100F0F] text-xs" >
												Alerts
											</span>
										</div>
										<div className="self-stretch bg-[#B090912E] h-[1px] mb-[7px]">
										</div>
										<div className="flex items-start self-stretch mb-1.5 ml-[9px] mr-[35px]">
											<div className="flex shrink-0 items-center bg-[#FFBFBFB8] py-[9px] px-1.5 mr-[53px] gap-1.5 rounded-[10px]">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/tmr5h27l_expires_30_days.png"} 
													className="w-[11px] h-3 object-fill"
												/>
												<span className="text-[#C70A0A] text-xs" >
													Critical
												</span>
											</div>
											<span className="text-[#141313] text-xs" >
												Database connection failure
											</span>
											<div className="flex-1 self-stretch">
											</div>
											<span className="text-[#141313] text-xs" >
												INC - 001
											</span>
											<div className="flex-1 self-stretch">
											</div>
											<span className="text-[#141313] text-xs" >
												240
											</span>
										</div>
										<div className="self-stretch bg-[#B090912E] h-[1px] mb-[7px]">
										</div>
										<div className="flex items-center self-stretch mb-2 ml-[9px] mr-[38px]">
											<div className="flex shrink-0 items-center bg-[#F7C9A3B8] py-[9px] px-1.5 mr-[70px] gap-[5px] rounded-[10px]">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/x1ewz3vi_expires_30_days.png"} 
													className="w-[11px] h-3 object-fill"
												/>
												<span className="text-[#FF9D4C] text-xs" >
													High
												</span>
											</div>
											<span className="text-[#141313] text-xs" >
												High CPU usage
											</span>
											<div className="flex-1 self-stretch">
											</div>
											<span className="text-[#141313] text-xs mr-[105px]" >
												INC - 002
											</span>
											<span className="text-[#141313] text-xs" >
												120
											</span>
										</div>
										<div className="self-stretch bg-[#B090912E] h-[1px] mb-1.5">
										</div>
										<div className="flex items-center self-stretch mb-[7px] ml-[9px] mr-10">
											<button className="flex shrink-0 items-center bg-[#F8E9A3B8] text-left py-[9px] px-1.5 mr-[52px] gap-[5px] rounded-[10px] border-0"
												onClick={()=>alert("Pressed!")}>
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/j7omicbg_expires_30_days.png"} 
													className="w-[11px] h-3 object-fill"
												/>
												<span className="text-[#A38605] text-xs" >
													Medium
												</span>
											</button>
											<span className="text-[#141313] text-xs" >
												API timeout
											</span>
											<div className="flex-1 self-stretch">
											</div>
											<span className="text-[#141313] text-xs mr-[108px]" >
												INC - 003
											</span>
											<span className="text-[#141313] text-xs" >
												85
											</span>
										</div>
										<div className="self-stretch bg-[#B090912E] h-[1px] mb-[7px]">
										</div>
										<div className="flex items-center self-stretch ml-[9px] mr-10">
											<button className="flex shrink-0 items-center bg-[#CDDDFCB8] text-left py-[9px] px-1.5 mr-[79px] gap-[5px] rounded-[10px] border-0"
												onClick={()=>alert("Pressed!")}>
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/shh4vp1q_expires_30_days.png"} 
													className="w-[11px] h-3 object-fill"
												/>
												<span className="text-[#5D88FF] text-xs" >
													Low
												</span>
											</button>
											<span className="text-[#141313] text-xs" >
												Authentication failure
											</span>
											<div className="flex-1 self-stretch">
											</div>
											<span className="text-[#141313] text-xs" >
												INC - 004
											</span>
											<div className="flex-1 self-stretch">
											</div>
											<span className="text-[#141313] text-xs" >
												55
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="flex items-center self-stretch bg-white py-3.5 px-[26px] mx-[3px] rounded-[10px]">
								<button className="flex flex-col shrink-0 items-start bg-[#CDDDFC] text-left py-2.5 px-[21px] mr-[22px] rounded-[10px] border-0"
									onClick={()=>alert("Pressed!")}>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/r8rq20zc_expires_30_days.png"} 
										className="w-5 h-[34px] object-fill"
									/>
								</button>
								<div className="flex flex-col shrink-0 items-start gap-2.5">
									<span className="text-[#05001F] text-base font-bold mr-[179px]" >
										Simulate Alert Spike
									</span>
									<span className="text-[#686464] text-xs" >
										Generate high volume of alerts to see AlertGuard in action.
									</span>
								</div>
								<div className="flex-1 self-stretch">
								</div>
								<button className="flex flex-col shrink-0 items-start bg-[#5540C2] text-left py-[19px] px-[72px] rounded-[10px] border-0"
									onClick={()=>alert("Pressed!")}>
									<span className="text-white text-xs" >
										Simulate Alert Spike
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}