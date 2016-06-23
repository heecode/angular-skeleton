using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Angular_Skeleton.WebApi.Models;

namespace Angular_Skeleton.WebApi.Controllers
{
    public class CarsController : ApiController
    {

        private IEnumerable<CarViewModel> getCarList()
        {
            var carViewModels = new List<CarViewModel>();
            carViewModels.Add(new CarViewModel { CarType = "Toyota", Owner = "Heemi", PlateNo = "WRX 3783" });
            carViewModels.Add(new CarViewModel { CarType = "Proton", Owner = "Neelofa", PlateNo = "WRX 3788" });
            carViewModels.Add(new CarViewModel { CarType = "Subaru", Owner = "Miral", PlateNo = "WRX 3789" });

            return carViewModels;
        }

        // GET: api/Cars
        //public IEnumerable<CarViewModel> Get()
        //{
        //    return getCarList();
        //}

        public IHttpActionResult Get()
        {
            return Ok(getCarList());
        }

        public IHttpActionResult GetByVm(CarViewModel carViewModel)
        {
            var data = carViewModel;
            return Ok(getCarList());
        }

        // GET: api/Cars/5
        public IHttpActionResult Get(string plateNo)
        {
            return Ok(getCarList().Where(x => x.PlateNo == plateNo.Trim()));
        }

        // POST: api/Cars
        public  IHttpActionResult Post(CarViewModel carViewModel)
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
