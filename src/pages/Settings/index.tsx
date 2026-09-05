import React, {useState} from "react";
export default (props) => {
	const [input1, onChangeInput1] = useState('');
	const [input2, onChangeInput2] = useState('');
	const [input3, onChangeInput3] = useState('');
	const [input4, onChangeInput4] = useState('');
	return (
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-[#EFEFEF] overflow-hidden">
				<div className="flex items-start self-stretch bg-[#CDDDFC] relative border border-solid border-[#5D88FF]">
					<div className="w-[341px] h-20 mr-[50px]">
					</div>
					<div className="flex flex-col shrink-0 items-start self-stretch bg-[#CDDDFC] absolute top-0 bottom-0 left-0 py-3 pl-[87px] pr-11 border border-solid border-[#5D88FF]">
						<div className="flex flex-col items-center relative">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/9gh5kkw9_expires_30_days.png"} 
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
					<span className="text-black text-[32px] mt-4" >
						Settings
					</span>
					<div className="flex-1 self-stretch">
					</div>
					<button className="flex shrink-0 items-center bg-white text-left py-2.5 px-4 mt-[18px] mr-[45px] gap-[15px] rounded-[10px] border-0"
						onClick={()=>alert("Pressed!")}>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/a7najn8t_expires_30_days.png"} 
							className="w-[19px] h-[18px] object-fill"
						/>
						<span className="text-[#05001F] text-[13px]" >
							August 20, 2026 | 9:30 AM
						</span>
					</button>
					<div className="flex justify-between items-center bg-white w-[198px] py-[1px] mt-[15px] rounded-[10px]">
						<div className="flex flex-col items-start w-[66px] ml-[19px] gap-[7px]">
							<span className="text-[#141313] text-[13px]" >
								Team User
							</span>
							<div className="flex items-center self-stretch gap-1">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/bwkp0dzd_expires_30_days.png"} 
									className="w-[11px] h-[11px] object-fill"
								/>
								<span className="text-[#37C81A] text-[13px]" >
									Online
								</span>
							</div>
						</div>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/equ40igk_expires_30_days.png"} 
							className="w-12 h-[47px] mr-2 object-fill"
						/>
					</div>
				</div>
				<div className="flex items-center self-stretch mr-14 gap-[25px]">
					<div className="bg-[#EDF3FF] w-[332px] pt-[30px] px-[15px]">
						<div className="flex items-center self-stretch bg-white mb-[30px] rounded-[10px]">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/hjltauwh_expires_30_days.png"} 
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
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/33pb4j2n_expires_30_days.png"} 
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
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/v0ntffq9_expires_30_days.png"} 
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
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/ygm82do6_expires_30_days.png"} 
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
						<div className="flex flex-col items-start self-stretch bg-white pt-7 mb-[66px] rounded-[10px]">
							<div className="flex items-center mb-9 ml-[27px] gap-[29px]">
								<button className="flex flex-col shrink-0 items-start bg-[#CDDDFC] text-left py-[11px] px-[13px] rounded-[10px] border-0"
									onClick={()=>alert("Pressed!")}>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/zx92s2cx_expires_30_days.png"} 
										className="w-[43px] h-[46px] object-fill"
									/>
								</button>
								<div className="flex flex-col shrink-0 items-center gap-[9px]">
									<span className="text-black text-2xl font-bold" >
										Alert Grouping Settings
									</span>
									<span className="text-black text-[15px]" >
										Configure how similar alerts are grouped 
									</span>
								</div>
							</div>
							<div className="flex flex-col items-end self-stretch mb-[55px]">
								<div className="flex items-center mr-[39px]">
									<span className="text-black text-2xl mr-[94px]" >
										Similarity Threshold
									</span>
									<div className="flex flex-col shrink-0 items-center relative mr-5">
										<div className="items-start bg-[#D9D9D9] pr-[187px] rounded-[10px]">
											<div className="bg-[#5D88FF] w-[568px] h-5 rounded-[10px]">
											</div>
										</div>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/z72uoozk_expires_30_days.png"} 
											className="w-[35px] h-8 absolute top-[-5px] right-[173px] object-fill"
										/>
									</div>
									<span className="text-[#141313] text-2xl" >
										80%
									</span>
								</div>
							</div>
						</div>
						<div className="flex flex-col items-start self-stretch bg-white py-[33px] mb-[57px] gap-[23px] rounded-[10px]">
							<div className="flex items-center ml-[27px] gap-[29px]">
								<button className="flex flex-col shrink-0 items-start bg-[#CDDDFC] text-left py-3.5 px-[13px] rounded-[10px] border-0"
									onClick={()=>alert("Pressed!")}>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/nrpsyi71_expires_30_days.png"} 
										className="w-[42px] h-10 object-fill"
									/>
								</button>
								<div className="flex flex-col shrink-0 items-start gap-[9px]">
									<span className="text-black text-2xl font-bold mr-[34px]" >
										Cooldown Settings
									</span>
									<span className="text-black text-[15px]" >
										Set time to suppress repeated alerts
									</span>
								</div>
							</div>
							<div className="flex items-center ml-[131px]">
								<span className="text-black text-2xl mr-[106px]" >
									Default Cooldown
								</span>
								<button className="flex shrink-0 items-center bg-[#CDDDFC] text-left py-[17px] px-3 rounded-[10px] border-0"
									onClick={()=>alert("Pressed!")}>
									<span className="text-black text-2xl mr-[613px]" >
										5 Minutes
									</span>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/kxmc94ku_expires_30_days.png"} 
										className="w-[18px] h-3.5 object-fill"
									/>
								</button>
							</div>
						</div>
						<div className="flex flex-col items-start self-stretch bg-white py-7 mx-1 rounded-[10px]">
							<div className="flex items-center mb-[33px] ml-[27px] gap-[29px]">
								<button className="flex flex-col shrink-0 items-start bg-[#CDDDFC] text-left py-2 px-3.5 rounded-[10px] border-0"
									onClick={()=>alert("Pressed!")}>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/ez37e3av_expires_30_days.png"} 
										className="w-10 h-[52px] object-fill"
									/>
								</button>
								<div className="flex flex-col shrink-0 items-start gap-[9px]">
									<span className="text-black text-2xl font-bold mr-[15px]" >
										Notification Settings
									</span>
									<span className="text-black text-[15px]" >
										Choose how you want to be notified 
									</span>
								</div>
							</div>
							<div className="flex flex-col items-center self-stretch mb-2.5">
								<div className="flex items-start">
									<span className="text-black text-2xl mr-[770px]" >
										Email Notifications
									</span>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/jzbajpce_expires_30_days.png"} 
										className="w-[99px] h-[43px] object-fill"
									/>
								</div>
							</div>
							<div className="self-stretch bg-[#D3CFCF] h-0.5 mb-[11px] ml-32">
							</div>
							<div className="flex flex-col items-center self-stretch">
								<div className="flex items-start">
									<span className="text-black text-2xl mr-[783px]" >
										Dashboard Alerts
									</span>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/osmaz9k5_expires_30_days.png"} 
										className="w-[99px] h-[43px] object-fill"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}