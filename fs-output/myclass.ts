
namespace myns {
	class myclass {
		public abc1: string;
		public bcd1: number;
		public cde1: boolean;
		public test():void{
			const a = 10;
			const b = 20;
			console.log(a+b);
		}
		public test2():void{
			const a = 10;
			const b = 20;
			const c = () => {
				console.log(a + b);
			}
			c();
		}
	}
}