using Angular_Skeleton.Api.Hubs;
using Angular_Skeleton.Api.Models;
using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Angular_Skeleton.Api.Controllers
{
    [RoutePrefix("api/Cars")]
    public class CarsController : ApiController
    {
        private readonly IHubContext _carsHub;
        
            private IEnumerable<CarViewModel> getCarList()
            {
                var carViewModels = new List<CarViewModel>();
                carViewModels.Add(new CarViewModel { CarType = "Toyota", Owner = "Heemi", PlateNo = "WRX 3783" });
                carViewModels.Add(new CarViewModel { CarType = "Proton", Owner = "Neelofa", PlateNo = "WRX 3788" });
                carViewModels.Add(new CarViewModel { CarType = "Subaru", Owner = "Miral", PlateNo = "WRX 3789" });

                return carViewModels;
            }

        public CarsController()
        {
            _carsHub = GlobalHost.ConnectionManager.GetHubContext<CarHub>();
        }


        [System.Web.Http.Authorize]
        [Route("")]
        public IHttpActionResult Get()
            {
                return Ok(getCarList());
            }

            // GET: api/Cars/5
            public IHttpActionResult Get(string plateNo)
            {
                return Ok(getCarList().Where(x => x.PlateNo == plateNo.Trim()));
            }

            // POST: api/Cars
            public IHttpActionResult Post(CarViewModel carViewModel)
            {
                return Ok(carViewModel);
            }

            // PUT: api/Cars/5
            public IHttpActionResult Put(CarViewModel carViewModel)
            {
                return Ok(carViewModel);
            }

            // DELETE: api/Cars/5
            public void Delete(int id)
            {
            }
        }
    
}
